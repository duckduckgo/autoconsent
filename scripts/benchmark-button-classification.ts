/**
 * Benchmark classifyButtonTextRegex against labelled button texts (exact label match, occurrence-weighted).
 * New labelled rows are produced by the tracker-radar-collector post-processing scripts.
 */
import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import { classifyButtonTextRegex } from '../lib/heuristics';
import {
    buildLabelBenchmarks,
    classifyRows,
    formatExample,
    LabelBenchmark,
    parseButtonTextCsv,
    pct,
} from '../tests-wtr/heuristics/button-text-benchmark';

const DEFAULT_CSV_PATH = path.join(__dirname, '../tests-wtr/heuristics/fixtures/labelled-button-texts.csv');
const TOP_FAILURES = 25;

const program = new Command();
program
    .description('Benchmark classifyButtonTextRegex against labelled button texts (exact label match, occurrence-weighted)')
    .option('-i, --input <path>', 'path to labelled button text CSV', DEFAULT_CSV_PATH)
    .option('--top <n>', 'number of failure examples to print per label', (v) => parseInt(v, 10), TOP_FAILURES)
    .parse(process.argv);

const opts = program.opts<{ input: string; top: number }>();

function printLabelBenchmark(b: LabelBenchmark) {
    console.log(`\n  ${b.label}`);
    console.log(
        `    correctly labelled: ${b.rowCorrect}/${b.rowSupport} rows (${pct(b.rowCorrect, b.rowSupport)}), ${b.weightedCorrect}/${b.weightedSupport} weighted (${pct(b.weightedCorrect, b.weightedSupport)})`,
    );
    console.log(
        `    false positives (predicted ${b.label}, labelled otherwise): ${b.falsePositiveExamples.length} rows, ${b.weightedFalsePositives} weighted`,
    );
    for (const [title, examples] of [
        ['top false positives', b.falsePositiveExamples],
        ['top missed', b.missedExamples],
    ] as const) {
        console.log(`    ${title}:${examples.length === 0 ? ' (none)' : ''}`);
        for (const example of examples.slice(0, opts.top)) {
            console.log(`      ${formatExample(example)}`);
        }
    }
}

function main() {
    const inputPath = path.resolve(opts.input);
    const rows = parseButtonTextCsv(fs.readFileSync(inputPath, 'utf8'));
    if (rows.length === 0) {
        console.error('no labelled rows found in', inputPath);
        process.exit(1);
    }

    const benchmarks = buildLabelBenchmarks(classifyRows(rows, classifyButtonTextRegex));
    const total = (key: 'rowSupport' | 'weightedSupport' | 'rowCorrect' | 'weightedCorrect' | 'weightedFalsePositives') =>
        benchmarks.reduce((sum, b) => sum + b[key], 0);

    console.log(`Input: ${inputPath} (${rows.length} labelled rows)`);
    console.log('\nclassifyButtonTextRegex benchmark (excluding other)');
    console.log(
        `  correctly labelled: ${total('rowCorrect')}/${total('rowSupport')} rows, ${total('weightedCorrect')}/${total('weightedSupport')} weighted (${pct(total('weightedCorrect'), total('weightedSupport'))})`,
    );
    console.log(`  false positives (weighted): ${total('weightedFalsePositives')}`);
    console.log(`  missed (weighted): ${total('weightedSupport') - total('weightedCorrect')}`);
    benchmarks.forEach(printLabelBenchmark);
}

main();
