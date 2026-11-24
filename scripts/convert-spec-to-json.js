// Converts legacy tests/**/<name>.spec.ts files (generateCMPTests calls) into tests/sites/**/<name>.json and deletes them.
// Meant for branches that still add .spec.ts files; remove once no such branches are left.
// Usage: node scripts/convert-spec-to-json.js [--overwrite] [tests/foo.spec.ts ...]   (default: every legacy spec under tests/)
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const prettier = require('prettier');

const repoRoot = path.join(__dirname, '..');
const testsDir = path.join(repoRoot, 'tests');
const sitesDir = path.join(testsDir, 'sites');
const KEEP = new Set(['rule-sites.spec.ts']);

function findLegacySpecs() {
    const found = [];
    for (const sub of ['', 'generated']) {
        const dir = path.join(testsDir, sub);
        if (!fs.existsSync(dir)) {
            continue;
        }
        for (const f of fs.readdirSync(dir)) {
            if (f.endsWith('.spec.ts') && !KEEP.has(f)) {
                found.push(path.join(dir, f));
            }
        }
    }
    return found.sort();
}

// Evaluates a literal expression; identifiers resolve to earlier top-level consts.
function evalLiteral(node, env, used) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (ts.isIdentifier(node)) {
        used.add(node.text);
        if (node.text in env) return structuredClone(env[node.text]);
        throw new Error(`cannot resolve ${node.text}`);
    }
    if (ts.isArrayLiteralExpression(node)) {
        return node.elements.flatMap((e) => (ts.isSpreadElement(e) ? evalLiteral(e.expression, env, used) : [evalLiteral(e, env, used)]));
    }
    if (ts.isObjectLiteralExpression(node)) {
        const out = {};
        for (const p of node.properties) {
            if (ts.isPropertyAssignment(p)) out[p.name.text] = evalLiteral(p.initializer, env, used);
            else if (ts.isShorthandPropertyAssignment(p)) out[p.name.text] = evalLiteral(p.name, env, used);
            else if (ts.isSpreadAssignment(p)) Object.assign(out, evalLiteral(p.expression, env, used));
            else throw new Error(`unsupported property: ${p.getText()}`);
        }
        return out;
    }
    throw new Error(`not a literal: ${node.getText().slice(0, 80)}`);
}

const isUrlComment = (text) => /^\/\/\s*['"`]https?:\/\//.test(text.trim());
const commentText = (text) =>
    text
        .replace(/^\/\/\s?/, '')
        .replace(/^\/\*+|\*+\/$/g, '')
        .replace(/\s*\n\s*\*?\s*/g, ' ')
        .trim();
const joinNotes = (notes) => notes.filter(Boolean).reduce((acc, n) => (acc ? `${acc}${/[.!?:;]$/.test(acc) ? ' ' : '. '}${n}` : n), '');

function convert(file) {
    const src = fs.readFileSync(file, 'utf8');
    const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const lineOf = (pos) => sf.getLineAndCharacterOfPosition(pos).line;
    const consumed = new Set();
    // Takes comments not used yet; `//` lines that follow each other become one comment.
    const takeRanges = (ranges) => {
        const merged = [];
        for (const r of (ranges || []).filter((range) => !consumed.has(range.pos))) {
            consumed.add(r.pos);
            const last = merged[merged.length - 1];
            const text = src.slice(r.pos, r.end);
            const continues =
                last &&
                r.kind === ts.SyntaxKind.SingleLineCommentTrivia &&
                lineOf(r.pos) === lineOf(last.end) + 1 &&
                !isUrlComment(text) &&
                !isUrlComment(last.text);
            if (continues) {
                last.text += ` ${commentText(text)}`;
                last.end = r.end;
            } else {
                merged.push({ pos: r.pos, end: r.end, text });
            }
        }
        return merged;
    };
    const take = (ranges) => takeRanges(ranges).map((r) => r.text);
    const afterComma = (pos) => (/^\s*,/.test(src.slice(pos, pos + 20)) ? src.indexOf(',', pos) + 1 : pos);
    const droppedUrls = [];

    const env = {};
    const constNotes = {};
    const groups = [];
    let cmp = null;
    let timeout;
    let timeoutNotes = [];

    for (const st of sf.statements) {
        const lead = take(ts.getLeadingCommentRanges(src, st.pos)).map(commentText);
        if (ts.isImportDeclaration(st)) continue;
        if (ts.isVariableStatement(st)) {
            for (const d of st.declarationList.declarations) {
                env[d.name.text] = evalLiteral(d.initializer, env, new Set());
                constNotes[d.name.text] = lead;
            }
            continue;
        }
        const call = ts.isExpressionStatement(st) && ts.isCallExpression(st.expression) ? st.expression : null;
        if (call && call.expression.getText() === 'test.describe.configure') {
            const config = evalLiteral(call.arguments[0], env, new Set());
            if (Object.keys(config).join() !== 'timeout') throw new Error(`unsupported describe.configure: ${JSON.stringify(config)}`);
            timeout = config.timeout;
            timeoutNotes = lead;
            continue;
        }
        if (!call || call.expression.getText() !== 'generateCMPTests') {
            throw new Error(`unsupported statement: ${st.getText().slice(0, 80)}`);
        }

        const used = new Set();
        const [cmpNode, sitesNode, optionsNode] = call.arguments;
        const thisCmp = evalLiteral(cmpNode, env, used);
        if (cmp !== null && cmp !== thisCmp) throw new Error('more than one rule name in one spec');
        cmp = thisCmp;
        const options = optionsNode ? evalLiteral(optionsNode, env, used) : {};
        if (timeout) options.timeout = timeout;

        const sharedNotes = [...(timeout ? timeoutNotes : []), ...[...used].flatMap((name) => constNotes[name] || [])];
        const callNotes = [...lead];
        if (optionsNode) {
            callNotes.push(...take(ts.getLeadingCommentRanges(src, optionsNode.pos)).map(commentText));
            const visit = (n) => {
                callNotes.push(...take(ts.getLeadingCommentRanges(src, n.pos)).map(commentText));
                ts.forEachChild(n, visit);
                callNotes.push(...take(ts.getTrailingCommentRanges(src, afterComma(n.end))).map(commentText));
            };
            ts.forEachChild(optionsNode, visit);
            callNotes.push(...take(ts.getLeadingCommentRanges(src, optionsNode.end - 1)).map(commentText));
        }

        // A comment line in the site list starts a new group; a comment after a site on the same line notes that site alone.
        const segments = [];
        let current = { notes: [], sites: [] };
        const flush = () => current.sites.length && segments.push(current);
        if (ts.isArrayLiteralExpression(sitesNode)) {
            const elements = sitesNode.elements;
            const handle = (comments, ranges, previous) => {
                comments.forEach((text, i) => {
                    if (isUrlComment(text)) {
                        droppedUrls.push(text.trim());
                    } else if (previous && lineOf(ranges[i].pos) === lineOf(previous.end)) {
                        const site = current.sites.pop();
                        flush();
                        segments.push({ notes: [commentText(text)], sites: [site] });
                        current = { notes: current.notes, sites: [] };
                    } else {
                        flush();
                        current = { notes: [commentText(text)], sites: [] };
                    }
                });
            };
            const takeSplit = (ranges) => {
                const taken = takeRanges(ranges);
                return [taken.map((r) => r.text), taken];
            };
            elements.forEach((el, i) => {
                handle(...takeSplit(ts.getLeadingCommentRanges(src, el.pos)), elements[i - 1]);
                current.sites.push(evalLiteral(el, env, used));
                handle(...takeSplit(ts.getTrailingCommentRanges(src, afterComma(el.end))), el);
            });
            handle(...takeSplit(ts.getLeadingCommentRanges(src, elements.end)), elements[elements.length - 1]);
            flush();
        } else {
            segments.push({ notes: [], sites: evalLiteral(sitesNode, env, used) });
        }
        for (const segment of segments) {
            groups.push({ sharedNotes, notes: [...callNotes, ...segment.notes], sites: segment.sites, options });
        }
    }

    const leftover = take(ts.getLeadingCommentRanges(src, sf.endOfFileToken.pos));
    let total = 0;
    const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, ts.LanguageVariant.Standard, src);
    for (let tok = scanner.scan(); tok !== ts.SyntaxKind.EndOfFileToken; tok = scanner.scan()) {
        if (tok === ts.SyntaxKind.SingleLineCommentTrivia || tok === ts.SyntaxKind.MultiLineCommentTrivia) total++;
    }
    if (leftover.length > 0 || total !== consumed.size) {
        throw new Error(`could not place ${total - consumed.size + leftover.length} comment(s)`);
    }
    if (cmp === null) throw new Error('no generateCMPTests call');

    // Notes from shared constants that every group uses go to the file level.
    const allShared = groups[0].sharedNotes.filter((n) => groups.every((g) => g.sharedNotes.includes(n)));
    const data = { cmp };
    if (allShared.length > 0) data.note = joinNotes(allShared);
    data.tests = groups.map((g) => {
        const group = {};
        const note = joinNotes([...g.sharedNotes.filter((n) => !allShared.includes(n)), ...g.notes]);
        if (note) group.note = note;
        group.sites = g.sites;
        if (Object.keys(g.options).length > 0) group.options = g.options;
        return group;
    });
    return { data, droppedUrls };
}

// Options stay on one line, so prettier keeps them collapsed where they fit.
function stringify(data) {
    const groups = data.tests.map((g) => {
        const fields = Object.entries(g).map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`);
        return `{\n${fields.join(',\n')}\n}`;
    });
    const head = Object.entries(data)
        .filter(([k]) => k !== 'tests')
        .map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)},\n`)
        .join('');
    return `{\n${head}"tests": [\n${groups.join(',\n')}\n]\n}\n`;
}

(async () => {
    const args = process.argv.slice(2);
    const overwrite = args.includes('--overwrite');
    const paths = args.filter((a) => a !== '--overwrite');
    const files = paths.length > 0 ? paths.map((f) => path.resolve(f)) : findLegacySpecs();
    const prettierConfig = await prettier.resolveConfig(path.join(sitesDir, 'x.json'));
    let failed = 0;
    for (const file of files) {
        const rel = path.relative(testsDir, file);
        try {
            const { data, droppedUrls } = convert(file);
            const out = path.join(sitesDir, rel.replace(/\.spec\.ts$/, '.json'));
            if (fs.existsSync(out) && !overwrite) throw new Error(`${path.relative(repoRoot, out)} already exists (pass --overwrite)`);
            fs.mkdirSync(path.dirname(out), { recursive: true });
            fs.writeFileSync(out, await prettier.format(stringify(data), { ...prettierConfig, filepath: out }));
            fs.unlinkSync(file);
            for (const url of droppedUrls) {
                console.log(`${path.relative(repoRoot, file)}: dropped commented-out site ${url}`);
            }
        } catch (e) {
            failed++;
            console.error(`${path.relative(repoRoot, file)}: ${e.message}`);
        }
    }
    console.log(`Converted ${files.length - failed} of ${files.length} spec files`);
    process.exit(failed > 0 ? 1 : 0);
})();
