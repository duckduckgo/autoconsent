import { expect } from '@esm-bundle/chai';
import { classifyButtonTextRegex } from '../../lib/heuristics';
import {
    BENCHMARK_LABELS,
    buildLabelBenchmarks,
    classifyRows,
    formatExample,
    LabelBenchmark,
    parseButtonTextCsv,
    pct,
} from './button-text-benchmark';

// Minimum occurrence-weighted accuracy required per label.
const MIN_WEIGHTED_ACCURACY = 0.9;

describe('classifyButtonTextRegex against labelled button texts', () => {
    let benchmarks: LabelBenchmark[];

    before(async () => {
        const response = await fetch('/tests-wtr/heuristics/fixtures/labelled-button-texts.csv');
        const rows = parseButtonTextCsv(await response.text());
        expect(rows.length).to.be.greaterThan(0, 'expected labelled rows in the CSV');
        benchmarks = buildLabelBenchmarks(classifyRows(rows, classifyButtonTextRegex));
    });

    BENCHMARK_LABELS.forEach((label, i) => {
        it(`never predicts "${label}" for a button labelled differently`, () => {
            const examples = benchmarks[i].falsePositiveExamples.slice(0, 10).map(formatExample).join('\n      ');
            expect(benchmarks[i].falsePositiveExamples.length).to.equal(0, `false positives for "${label}":\n      ${examples}\n`);
        });

        it(`classifies >${MIN_WEIGHTED_ACCURACY * 100}% of weighted "${label}" buttons correctly`, () => {
            const { weightedCorrect, weightedSupport } = benchmarks[i];
            expect(weightedSupport).to.be.greaterThan(0, `expected labelled rows for "${label}"`);
            expect(weightedCorrect / weightedSupport).to.be.greaterThan(
                MIN_WEIGHTED_ACCURACY,
                `weighted accuracy for "${label}" was ${pct(weightedCorrect, weightedSupport)} (${weightedCorrect}/${weightedSupport})`,
            );
        });
    });
});
