/**
 * Benchmark classifyButtonTextRegex against labelled button texts (exact label match, occurrence-weighted).
 * New labelled rows are produced by the tracker-radar-collector post-processing scripts.
 */
import fs from 'fs';
import path from 'path';
import { parseArgs } from 'util';
import { classifyButtonTextRegex } from '../lib/heuristics';
import { buildLabelBenchmarks, classifyRows, formatExample, LabelBenchmark, parseButtonTextCsv, pct } from './button-text-benchmark';

const DEFAULT_CSV_PATH = path.join(__dirname, '../data/labelled-button-texts.csv');
const TOP_FAILURES = 25;
const USAGE = `Usage: npm run benchmark-buttons -- [--input <path>] [--top <n>]

Benchmark classifyButtonTextRegex against labelled button texts (exact label match, occurrence-weighted).

  -i, --input <path>  path to labelled button text CSV (default: ${path.relative(process.cwd(), DEFAULT_CSV_PATH)})
  --top <n>           number of failure examples to print per label (default: ${TOP_FAILURES})
  -h, --help          show this help`;

const { values } = parseArgs({
    options: {
        input: { type: 'string', short: 'i', default: DEFAULT_CSV_PATH },
        top: { type: 'string', default: String(TOP_FAILURES) },
        help: { type: 'boolean', short: 'h' },
    },
});
if (values.help) {
    console.log(USAGE);
    process.exit(0);
}
const opts = { input: values.input, top: parseInt(values.top, 10) };

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

function printOtherBenchmark(b: LabelBenchmark) {
    console.log(`\n  ${b.label}`);
    console.log(
        `    correctly labelled: ${b.rowCorrect}/${b.rowSupport} rows (${pct(b.rowCorrect, b.rowSupport)}), ${b.weightedCorrect}/${b.weightedSupport} weighted (${pct(b.weightedCorrect, b.weightedSupport)})`,
    );
    // false positives for 'other' are missed buttons, already listed under each button label
    console.log(`    top misclassified (labelled other, predicted a button type):${b.missedExamples.length === 0 ? ' (none)' : ''}`);
    for (const example of b.missedExamples.slice(0, opts.top)) {
        console.log(`      ${formatExample(example)}`);
    }
}

function main() {
    const inputPath = path.resolve(opts.input);
    const rows = parseButtonTextCsv(fs.readFileSync(inputPath, 'utf8'));
    if (rows.length === 0) {
        console.error('no labelled rows found in', inputPath);
        process.exit(1);
    }

    const allBenchmarks = buildLabelBenchmarks(classifyRows(rows, classifyButtonTextRegex));
    const benchmarks = allBenchmarks.filter((b) => b.label !== 'other');
    const otherBenchmark = allBenchmarks.find((b) => b.label === 'other')!;
    const total = (key: 'rowSupport' | 'weightedSupport' | 'rowCorrect' | 'weightedCorrect' | 'weightedFalsePositives') =>
        benchmarks.reduce((sum, b) => sum + b[key], 0);

    console.log(`Input: ${inputPath} (${rows.length} labelled rows)`);
    console.log('\nclassifyButtonTextRegex benchmark (button labels; false positives include rows labelled other)');
    console.log(
        `  correctly labelled: ${total('rowCorrect')}/${total('rowSupport')} rows, ${total('weightedCorrect')}/${total('weightedSupport')} weighted (${pct(total('weightedCorrect'), total('weightedSupport'))})`,
    );
    console.log(`  false positives (weighted): ${total('weightedFalsePositives')}`);
    console.log(`  missed (weighted): ${total('weightedSupport') - total('weightedCorrect')}`);
    benchmarks.forEach(printLabelBenchmark);
    printOtherBenchmark(otherBenchmark);
}

main();
