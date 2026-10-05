/**
 * Helpers for scoring the button classifier against labelled-button-texts.csv.
 * Shared by the WTR accuracy test and scripts/benchmark-button-classification.ts, so must not use Node or DOM APIs.
 */
import { ButtonRegexClassification } from '../../lib/types';

export const VALID_LABELS: readonly ButtonRegexClassification[] = ['settings', 'accept', 'reject', 'acknowledge', 'other'];

export const BENCHMARK_LABELS: readonly ButtonRegexClassification[] = ['settings', 'accept', 'reject', 'acknowledge'];

export type ButtonTextRow = {
    buttonText: string;
    occurences: number;
    label: ButtonRegexClassification;
};

export type ClassifiedButtonTextRow = ButtonTextRow & {
    predicted: ButtonRegexClassification;
};

export type LabelBenchmark = {
    label: ButtonRegexClassification;
    rowSupport: number;
    weightedSupport: number;
    rowCorrect: number;
    weightedCorrect: number;
    rowCorrectRate: number | null;
    weightedCorrectRate: number | null;
    rowFalsePositives: number;
    weightedFalsePositives: number;
    rowFalsePositiveRate: number | null;
    weightedFalsePositiveRate: number | null;
    rowMissed: number;
    weightedMissed: number;
    falsePositiveExamples: ClassifiedButtonTextRow[];
    missedExamples: ClassifiedButtonTextRow[];
};

/**
 * Minimal RFC 4180 parser: quoted fields, escaped quotes ("") and newlines inside quotes.
 */
function parseCsvRecords(content: string): string[][] {
    const records: string[][] = [];
    let record: string[] = [];
    let field = '';
    let inQuotes = false;
    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        if (inQuotes) {
            if (char === '"' && content[i + 1] === '"') {
                field += '"';
                i++;
            } else if (char === '"') {
                inQuotes = false;
            } else {
                field += char;
            }
        } else if (char === '"') {
            inQuotes = true;
        } else if (char === ',') {
            record.push(field);
            field = '';
        } else if (char === '\n' || char === '\r') {
            if (char === '\r' && content[i + 1] === '\n') {
                i++;
            }
            record.push(field);
            records.push(record);
            record = [];
            field = '';
        } else {
            field += char;
        }
    }
    if (field || record.length > 0) {
        record.push(field);
        records.push(record);
    }
    return records.filter((r) => r.some((f) => f.trim()));
}

/**
 * Parse labelled-button-texts.csv (columns: button_text, occurences, label), keeping only rows with a valid label.
 */
export function parseButtonTextCsv(content: string): ButtonTextRow[] {
    const [header, ...records] = parseCsvRecords(content);
    if (!header) {
        return [];
    }
    const columns = header.map((h) => h.trim());
    const textIdx = columns.indexOf('button_text');
    const occurencesIdx = columns.indexOf('occurences');
    const labelIdx = columns.indexOf('label');
    if (textIdx === -1 || occurencesIdx === -1 || labelIdx === -1) {
        throw new Error(`unexpected CSV header: ${header.join(',')}`);
    }

    const rows: ButtonTextRow[] = [];
    for (const record of records) {
        const buttonText = record[textIdx]?.trim();
        const occurences = Number.parseInt(record[occurencesIdx], 10);
        const label = record[labelIdx]?.trim().toLowerCase() as ButtonRegexClassification;
        if (!buttonText || Number.isNaN(occurences) || !VALID_LABELS.includes(label)) {
            continue;
        }
        rows.push({ buttonText, occurences, label });
    }
    return rows;
}

export function classifyRows(
    rows: ButtonTextRow[],
    classifier: (buttonText: string) => ButtonRegexClassification,
): ClassifiedButtonTextRow[] {
    return rows.map((row) => ({ ...row, predicted: classifier(row.buttonText) }));
}

function sumOccurences(rows: ButtonTextRow[]): number {
    return rows.reduce((sum, row) => sum + row.occurences, 0);
}

function byOccurence(a: ButtonTextRow, b: ButtonTextRow): number {
    return b.occurences - a.occurences || a.buttonText.localeCompare(b.buttonText);
}

/**
 * Per-label precision/recall style stats. Rows labelled 'other' are excluded, matching the original collector benchmark.
 */
export function buildBenchmarkByLabel(results: ClassifiedButtonTextRow[]): Record<string, LabelBenchmark> {
    const benchmarkResults = results.filter((r) => r.label !== 'other');
    const rowTotal = benchmarkResults.length;
    const weightedTotal = sumOccurences(benchmarkResults);

    const byLabel: Record<string, LabelBenchmark> = {};
    for (const label of BENCHMARK_LABELS) {
        const support = benchmarkResults.filter((r) => r.label === label);
        const correct = support.filter((r) => r.predicted === label);
        const missed = support.filter((r) => r.predicted !== label);
        const falsePositives = benchmarkResults.filter((r) => r.predicted === label && r.label !== label);
        const rowSupport = support.length;
        const weightedSupport = sumOccurences(support);
        byLabel[label] = {
            label,
            rowSupport,
            weightedSupport,
            rowCorrect: correct.length,
            weightedCorrect: sumOccurences(correct),
            rowCorrectRate: rowSupport === 0 ? null : correct.length / rowSupport,
            weightedCorrectRate: weightedSupport === 0 ? null : sumOccurences(correct) / weightedSupport,
            rowFalsePositives: falsePositives.length,
            weightedFalsePositives: sumOccurences(falsePositives),
            rowFalsePositiveRate: rowTotal === 0 ? null : falsePositives.length / rowTotal,
            weightedFalsePositiveRate: weightedTotal === 0 ? null : sumOccurences(falsePositives) / weightedTotal,
            rowMissed: missed.length,
            weightedMissed: sumOccurences(missed),
            falsePositiveExamples: falsePositives.sort(byOccurence),
            missedExamples: missed.sort(byOccurence),
        };
    }
    return byLabel;
}

export function formatExample(row: ClassifiedButtonTextRow): string {
    return `[${row.label} -> ${row.predicted}] ${JSON.stringify(row.buttonText)} (x${row.occurences})`;
}
