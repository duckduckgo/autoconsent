const fs = require('fs');
const https = require('https');

const RELEASE_IMPACT_LABELS = ['major', 'minor', 'patch'];
const CATEGORY_LABELS = [
    'rules',
    'bug',
    'enhancement',
    'performance',
    'dependencies',
    'ci',
    'ai',
    'documentation',
    'tests',
    'internal',
    'other',
];
const COMMENT_MARKER = '<!-- autoconsent-release-label-check -->';

function parseArgs(argv) {
    const args = {};

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

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readEvent(eventPath) {
    if (!eventPath) {
        return {};
    }

    return readJson(eventPath);
}

function getPullRequest(event) {
    if (event.pull_request) {
        return event.pull_request;
    }

    if (event.number && event.labels) {
        return event;
    }

    return undefined;
}

function getLabelsFromPullRequest(pullRequest) {
    return (pullRequest.labels || []).map((label) => {
        if (typeof label === 'string') {
            return label;
        }

        return label.name;
    });
}

function uniqueLabels(labels) {
    return [...new Set(labels)].sort((a, b) => a.localeCompare(b));
}

function validateLabels(labels) {
    const currentLabels = uniqueLabels(labels);
    const releaseImpactLabels = currentLabels.filter((label) => RELEASE_IMPACT_LABELS.includes(label));
    const categoryLabels = currentLabels.filter((label) => CATEGORY_LABELS.includes(label));
    const errors = [];

    if (releaseImpactLabels.length === 0) {
        errors.push(`Add exactly one release impact label: ${RELEASE_IMPACT_LABELS.join(', ')}.`);
    } else if (releaseImpactLabels.length > 1) {
        errors.push(`Keep exactly one release impact label; found ${releaseImpactLabels.join(', ')}.`);
    }

    if (categoryLabels.length === 0) {
        errors.push(`Add exactly one release-note category label: ${CATEGORY_LABELS.join(', ')}.`);
    } else if (categoryLabels.length > 1) {
        errors.push(`Keep exactly one release-note category label; found ${categoryLabels.join(', ')}.`);
    }

    return {
        ok: errors.length === 0,
        labels: currentLabels,
        releaseImpactLabels,
        categoryLabels,
        errors,
    };
}

function formatLabels(labels) {
    if (labels.length === 0) {
        return '_none_';
    }

    return labels.map((label) => `\`${label}\``).join(', ');
}

function formatComment(result) {
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
- One release impact label: ${formatLabels(RELEASE_IMPACT_LABELS)}
- One release-note category label: ${formatLabels(CATEGORY_LABELS)}

See [docs/release-notes.md](https://github.com/duckduckgo/autoconsent/blob/main/docs/release-notes.md) for examples.`;
}

function requestJson(url, token) {
    return new Promise((resolve, reject) => {
        const headers = {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'autoconsent-release-label-check',
            'X-GitHub-Api-Version': '2022-11-28',
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        https
            .get(url, { headers }, (response) => {
                let body = '';

                response.setEncoding('utf8');
                response.on('data', (chunk) => {
                    body += chunk;
                });
                response.on('end', () => {
                    if (response.statusCode < 200 || response.statusCode >= 300) {
                        reject(new Error(`GitHub API request failed: ${response.statusCode} ${body}`));
                        return;
                    }

                    resolve(JSON.parse(body));
                });
            })
            .on('error', reject);
    });
}

async function fetchCurrentLabels(event) {
    const pullRequest = getPullRequest(event);
    const repository = process.env.GITHUB_REPOSITORY;
    const token = process.env.GITHUB_TOKEN;

    if (!pullRequest || !repository) {
        throw new Error('Cannot fetch current labels without a pull request event and repository.');
    }

    const apiUrl = process.env.GITHUB_API_URL || 'https://api.github.com';
    const url = `${apiUrl}/repos/${repository}/issues/${pullRequest.number}/labels?per_page=100`;
    const labels = await requestJson(url, token);

    return getLabelsFromPullRequest({ labels });
}

async function main() {
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

    const result = validateLabels(labels);
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
    main().catch((error) => {
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = {
    CATEGORY_LABELS,
    RELEASE_IMPACT_LABELS,
    validateLabels,
};
