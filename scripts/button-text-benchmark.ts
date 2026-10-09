/**
 * Helpers for scoring the button classifier against data/labelled-button-texts.csv.
 * Shared by the WTR accuracy test and scripts/benchmark-button-classification.ts, so must not use Node or DOM APIs.
 */
// browser ESM build, so the same import works in WTR and in Node
import { parse } from 'csv-parse/browser/esm/sync';
import { ButtonRegexClassification } from '../lib/types';

const VALID_LABELS: readonly ButtonRegexClassification[] = ['settings', 'accept', 'reject', 'acknowledge', 'other'];

export const BENCHMARK_LABELS = VALID_LABELS.filter((label) => label !== 'other');

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
    weightedFalsePositives: number;
    falsePositiveExamples: ClassifiedButtonTextRow[];
    missedExamples: ClassifiedButtonTextRow[];
};

/**
 * Parse labelled-button-texts.csv (columns: button_text, occurences, label), keeping only rows with a valid label.
 * Options match the reader in tracker-radar-collector, which also writes this file.
 */
export function parseButtonTextCsv(content: string): ButtonTextRow[] {
    const records: Record<string, string>[] = parse(content, {
        columns: true,
        skip_empty_lines: true,
        relax_column_count: true,
        trim: true,
    });

    const rows: ButtonTextRow[] = [];
    for (const record of records) {
        const buttonText = record.button_text;
        const occurences = Number.parseInt(record.occurences, 10);
        const label = record.label?.toLowerCase() as ButtonRegexClassification;
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
 * Per-label stats, in BENCHMARK_LABELS order. Rows labelled 'other' are excluded, matching the original collector benchmark.
 */
export function buildLabelBenchmarks(results: ClassifiedButtonTextRow[]): LabelBenchmark[] {
    const benchmarkResults = results.filter((r) => r.label !== 'other');
    return BENCHMARK_LABELS.map((label) => {
        const support = benchmarkResults.filter((r) => r.label === label);
        const correct = support.filter((r) => r.predicted === label);
        const falsePositives = benchmarkResults.filter((r) => r.predicted === label && r.label !== label);
        return {
            label,
            rowSupport: support.length,
            weightedSupport: sumOccurences(support),
            rowCorrect: correct.length,
            weightedCorrect: sumOccurences(correct),
            weightedFalsePositives: sumOccurences(falsePositives),
            falsePositiveExamples: falsePositives.sort(byOccurence),
            missedExamples: support.filter((r) => r.predicted !== label).sort(byOccurence),
        };
    });
}

export function pct(numerator: number, denominator: number): string {
    return denominator === 0 ? 'n/a' : `${((numerator / denominator) * 100).toFixed(1)}%`;
}

export function formatExample(row: ClassifiedButtonTextRow): string {
    return `[${row.label} -> ${row.predicted}] ${JSON.stringify(row.buttonText)} (x${row.occurences})`;
}
