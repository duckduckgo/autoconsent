import fs from 'fs';
import { Octokit } from '@octokit/rest';

const VERSION_LABELS = ['version: major', 'version: minor', 'version: patch'] as const;
const CATEGORY_LABELS = [
    'category: rules',
    'category: bug',
    'category: enhancement',
    'category: performance',
    'category: dependencies',
    'category: ci',
    'category: ai',
    'category: documentation',
    'category: tests',
    'category: internal',
    'category: other',
] as const;
const COMMENT_MARKER = '<!-- autoconsent-release-label-check -->';

type LabelName = (typeof VERSION_LABELS)[number] | (typeof CATEGORY_LABELS)[number];

interface Args {
    event?: string;
    fetchCurrentLabels?: boolean;
    jsonOutput?: string;
    labels?: string[];
}

interface PullRequestLabel {
    name: string;
}

interface PullRequest {
    labels?: Array<string | PullRequestLabel>;
    number: number;
}

interface PullRequestEvent {
    pull_request?: PullRequest;
    labels?: Array<string | PullRequestLabel>;
    number?: number;
}

interface ValidationResult {
    ok: boolean;
    labels: string[];
    versionLabels: string[];
    categoryLabels: string[];
    errors: string[];
    comment?: string;
}

function parseArgs(argv: string[]): Args {
    const args: Args = {};

    for (let i = 2; i < argv.length; i += 1) {
        const arg = argv[i];

        if (arg === '--fetch-current-labels') {
            args.fetchCurrentLabels = true;
        } else if (arg === '--event') {
            args.event = argv[(i += 1)];
        } else if (arg === '--json-output') {
            args.jsonOutput = argv[(i += 1)];
        } else if (arg === '--labels') {
            args.labels = argv[(i += 1)]
                .split(',')
                .map((label) => label.trim())
                .filter(Boolean);
        } else {
            throw new Error(`Unknown argument: ${arg}`);
        }
    }

    return args;
}

function readJson(filePath: string): unknown {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readEvent(eventPath?: string): PullRequestEvent {
    if (!eventPath) {
        return {};
    }

    return readJson(eventPath) as PullRequestEvent;
}

function getPullRequest(event: PullRequestEvent): PullRequest | undefined {
    if (event.pull_request) {
        return event.pull_request;
    }

    if (event.number && event.labels) {
        return event as PullRequest;
    }

    return undefined;
}

function getLabelsFromPullRequest(pullRequest: Pick<PullRequest, 'labels'>): string[] {
    return (pullRequest.labels || []).map((label) => {
        if (typeof label === 'string') {
            return label;
        }

        return label.name;
    });
}

function uniqueLabels(labels: string[]): string[] {
    return [...new Set(labels)].sort((a, b) => a.localeCompare(b));
}

function isKnownLabel(labelSet: readonly LabelName[], label: string): boolean {
    return labelSet.some((knownLabel) => knownLabel === label);
}

export function validateLabels(labels: string[]): ValidationResult {
    const currentLabels = uniqueLabels(labels);
    const versionLabels = currentLabels.filter((label) => isKnownLabel(VERSION_LABELS, label));
    const categoryLabels = currentLabels.filter((label) => isKnownLabel(CATEGORY_LABELS, label));
    const errors: string[] = [];

    if (versionLabels.length === 0) {
        errors.push(`Add exactly one version label: ${VERSION_LABELS.join(', ')}.`);
    } else if (versionLabels.length > 1) {
        errors.push(`Keep exactly one version label; found ${versionLabels.join(', ')}.`);
    }

    if (categoryLabels.length === 0) {
        errors.push(`Add exactly one release-note category label: ${CATEGORY_LABELS.join(', ')}.`);
    } else if (categoryLabels.length > 1) {
        errors.push(`Keep exactly one release-note category label; found ${categoryLabels.join(', ')}.`);
    }

    return {
        ok: errors.length === 0,
        labels: currentLabels,
        versionLabels,
        categoryLabels,
        errors,
    };
}

function formatLabels(labels: readonly string[]): string {
    if (labels.length === 0) {
        return '_none_';
    }

    return labels.map((label) => `\`${label}\``).join(', ');
}

function formatComment(result: ValidationResult): string {
    if (result.ok) {
        return `${COMMENT_MARKER}
### Release label check resolved

The release labels are valid.`;
    }

    return `${COMMENT_MARKER}
### Release label check failed

Please update this PR's release labels before merging.

Current labels: ${formatLabels(result.labels)}

Problems:
${result.errors.map((error) => `- ${error}`).join('\n')}

Required labels:
- One version label: ${formatLabels(VERSION_LABELS)}
- One release-note category label: ${formatLabels(CATEGORY_LABELS)}

See [docs/release-notes.md](https://github.com/duckduckgo/autoconsent/blob/main/docs/release-notes.md) for examples.`;
}

function getRepositoryParts(repository: string): { owner: string; repo: string } {
    const [owner, repo] = repository.split('/');

    if (!owner || !repo) {
        throw new Error(`Invalid GITHUB_REPOSITORY value: ${repository}`);
    }

    return { owner, repo };
}

async function fetchCurrentLabels(event: PullRequestEvent): Promise<string[]> {
    const pullRequest = getPullRequest(event);
    const repository = process.env.GITHUB_REPOSITORY;

    if (!pullRequest || !repository) {
        throw new Error('Cannot fetch current labels without a pull request event and repository.');
    }

    const { owner, repo } = getRepositoryParts(repository);
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
        baseUrl: process.env.GITHUB_API_URL || 'https://api.github.com',
    });
    const labels = await octokit.paginate(octokit.rest.issues.listLabelsOnIssue, {
        owner,
        repo,
        issue_number: pullRequest.number,
        per_page: 100,
    });

    return labels.map((label) => label.name);
}

async function main(): Promise<void> {
    const args = parseArgs(process.argv);
    const eventPath = args.event || process.env.GITHUB_EVENT_PATH;
    const event = readEvent(eventPath);
    const pullRequest = getPullRequest(event);
    let labels = args.labels;

    if (!labels && args.fetchCurrentLabels) {
        labels = await fetchCurrentLabels(event);
    }

    if (!labels && pullRequest) {
        labels = getLabelsFromPullRequest(pullRequest);
    }

    if (!labels) {
        throw new Error('No pull request labels found to validate.');
    }

    const result: ValidationResult = validateLabels(labels);
    result.comment = formatComment(result);

    if (args.jsonOutput) {
        fs.writeFileSync(args.jsonOutput, `${JSON.stringify(result, null, 2)}\n`);
    }

    if (result.ok) {
        console.log('Release labels look good.');
    } else {
        console.error(result.comment);
    }

    process.exit(result.ok ? 0 : 1);
}

if (require.main === module) {
    main().catch((error: unknown) => {
        console.error(error instanceof Error ? error.message : error);
        process.exit(1);
    });
}

export { CATEGORY_LABELS, VERSION_LABELS };
