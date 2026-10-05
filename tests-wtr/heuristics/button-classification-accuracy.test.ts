import { expect } from '@esm-bundle/chai';
import { classifyButtonTextRegex } from '../../lib/heuristics';
import { BENCHMARK_LABELS, ClassifiedButtonTextRow, classifyRows, formatExample, parseButtonTextCsv } from './button-text-benchmark';

// Minimum occurrence-weighted accuracy required per label.
const MIN_WEIGHTED_ACCURACY = 0.9;

describe('classifyButtonTextRegex against labelled button texts', () => {
    // Rows whose label is one of the benchmark labels (i.e. excluding 'other').
    let benchmarkRows: ClassifiedButtonTextRow[];

    before(async () => {
        const response = await fetch(new URL('./fixtures/labelled-button-texts.csv', import.meta.url));
        const rows = parseButtonTextCsv(await response.text());
        expect(rows.length).to.be.greaterThan(0, 'expected labelled rows in the CSV');
        benchmarkRows = classifyRows(rows, classifyButtonTextRegex).filter((row) => row.label !== 'other');
    });

    describe('no false positives', () => {
        for (const label of BENCHMARK_LABELS) {
            it(`never predicts "${label}" for a button labelled differently`, () => {
                const falsePositives = benchmarkRows
                    .filter((row) => row.predicted === label && row.label !== label)
                    .sort((a, b) => b.occurences - a.occurences);
                const examples = falsePositives.slice(0, 10).map(formatExample).join('\n      ');
                expect(falsePositives.length).to.equal(0, `false positives for "${label}":\n      ${examples}\n`);
            });
        }
    });

    describe('weighted accuracy', () => {
        for (const label of BENCHMARK_LABELS) {
            it(`classifies >${MIN_WEIGHTED_ACCURACY * 100}% of weighted "${label}" buttons correctly`, () => {
                const support = benchmarkRows.filter((row) => row.label === label);
                const weightedSupport = support.reduce((sum, row) => sum + row.occurences, 0);
                expect(weightedSupport).to.be.greaterThan(0, `expected labelled rows for "${label}"`);

                const weightedCorrect = support.filter((row) => row.predicted === label).reduce((sum, row) => sum + row.occurences, 0);
                const accuracy = weightedCorrect / weightedSupport;
                expect(accuracy).to.be.greaterThan(
                    MIN_WEIGHTED_ACCURACY,
                    `weighted accuracy for "${label}" was ${(accuracy * 100).toFixed(1)}% (${weightedCorrect}/${weightedSupport})`,
                );
            });
        }
    });
});
