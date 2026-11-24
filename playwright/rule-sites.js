// Reads the rule test data in tests/sites. Plain CommonJS, so Node scripts can share it with the Playwright spec.
const fs = require('fs');
const path = require('path');

const RULE_SITES_DIR = path.join(__dirname, '../tests/sites');

/**
 * Ids of all data files: the path under tests/sites without `.json`, e.g. `onetrust` or `generated/auto_AU_x`.
 * @returns {string[]}
 */
function listRuleSiteIds() {
    const ids = [];
    const walk = (dir, prefix) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (entry.isDirectory()) {
                walk(path.join(dir, entry.name), `${prefix}${entry.name}/`);
            } else if (entry.name.endsWith('.json')) {
                ids.push(`${prefix}${entry.name.slice(0, -'.json'.length)}`);
            }
        }
    };
    if (fs.existsSync(RULE_SITES_DIR)) {
        walk(RULE_SITES_DIR, '');
    }
    return ids.sort();
}

/**
 * The id for an id or a path (`tests/sites/onetrust.json`, `onetrust.json` and `onetrust` all give `onetrust`).
 * @param {string} idOrPath
 * @returns {string}
 */
function toRuleSiteId(idOrPath) {
    return idOrPath
        .trim()
        .replace(/\\/g, '/')
        .replace(/^(\.\/)?(tests\/sites\/)?/, '')
        .replace(/\.json$/, '');
}

/**
 * @param {string} id
 * @returns {import('./spec-types').RuleSiteSpec}
 */
function readRuleSiteSpec(id) {
    return JSON.parse(fs.readFileSync(path.join(RULE_SITES_DIR, `${id}.json`), 'utf8'));
}

/**
 * Loads the given data files, or all of them. Throws on an unknown id, so a selection never silently runs nothing.
 * @param {string[] | null} [ids]
 * @returns {{ id: string, spec: import('./spec-types').RuleSiteSpec }[]}
 */
function loadRuleSiteSpecs(ids) {
    const known = listRuleSiteIds();
    const selected = ids ? [...new Set(ids.map(toRuleSiteId))] : known;
    const unknown = selected.filter((id) => !known.includes(id));
    if (unknown.length > 0) {
        throw new Error(`No rule test data in tests/sites for: ${unknown.join(', ')}`);
    }
    return selected.map((id) => ({ id, spec: readRuleSiteSpec(id) }));
}

/**
 * Parses a comma- or whitespace-separated list of ids, as in the SPECS env var. Unset means all.
 * @param {string | undefined} value
 * @returns {string[] | null}
 */
function parseRuleSiteIds(value) {
    if (value === undefined) {
        return null;
    }
    return value.split(/[\s,]+/).filter(Boolean);
}

module.exports = { RULE_SITES_DIR, listRuleSiteIds, toRuleSiteId, readRuleSiteSpec, loadRuleSiteSpecs, parseRuleSiteIds };
