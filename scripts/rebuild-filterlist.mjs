#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';
import { getDomain } from 'tldts';

const rulesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../rules');
const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../data');

const easylistRevision = fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_revision.txt'), 'utf-8');

const trancoCSV = fs.readFileSync(path.join(dataDir, 'top-1m.csv'), 'utf-8');
const MAX_DOMAIN_RANK = 100000;

let domainMap

async function processFilterList (listFileName) {
    console.log(`Processing ${listFileName}`);
    const data = fs.readFileSync(path.join(rulesDir, 'filterlists', listFileName), 'utf-8');
    const lines = data.split('\n');
    const filterlistJSON = {"rules": {}};

    // first remove irrelevant rules
    const filteredLines = lines.filter(line => !line.startsWith('!') &&
                                               !line.startsWith('##') &&
                                               !line.startsWith('||') &&
                                               !line.includes(':remove') &&
                                               !line.includes(':upward') &&
                                               !line.includes('redirect-rule'));
    // dump rules into json structure for parsing
    for (const line in filteredLines) {
        const rule = filteredLines[line];
        const splitRule = rule.split('##');
        const target = splitRule[0];
        const action = splitRule[1];

        if (!target || !action) {
            continue;
        }

        if (!filterlistJSON.rules[target]) {
            filterlistJSON.rules[target] = [action];
        } else {
            filterlistJSON.rules[target].push(action);
        }
    }

    // remove any targets that contain a +js rule. we do it this way because
    // when a target has a :js rule, we must also remove any css rules
    for (const item in filterlistJSON.rules) {
        const containsJS = filterlistJSON.rules[item].some(filter => filter.includes('+js'));
        if (containsJS) {
            delete filterlistJSON.rules[item];
        }
    }

    // remove longtail domain rules using tranco data
    for (const item in filterlistJSON.rules) {
        let domains;

        if (item.includes(',')) {
            domains = item.split(',');
        } else {
            domains = [item];
        }

        const filteredDomains = domains.filter(domain => {
            const tlDomain = getDomain(domain);
            return isPopularDomain(tlDomain);
        });

        // if no domains meet cutoff, remove rule entirely. if one or more
        // domains meet cutoff, remove those that don't
        if (filteredDomains.length === 0) {
            delete filterlistJSON.rules[item];
        } else if (filteredDomains.length !== domains.length) {
            const filteredDomainString = filteredDomains.join(',');
            filterlistJSON.rules[filteredDomainString] = filterlistJSON.rules[item];
            delete filterlistJSON.rules[item];
        }
    }

    await convertAndWriteADB(filterlistJSON, listFileName);
}

function isPopularDomain (domain) {
    // first load tranco csv into Map for easy querying
    if (typeof domainMap !== 'object') {
        loadTrancoList();
    }

    const match = domainMap.has(domain);

    return match;
}

function loadTrancoList () {
    const records = parse(trancoCSV, {
        columns: false,
        skip_empty_lines: true
    });

    domainMap = new Map();
    
    // we want to query by domain, not rank
    records.slice(0, MAX_DOMAIN_RANK).forEach(([key, value]) => {
        domainMap.set(value, key);
    });
}

function convertAndWriteADB(JSONList, fileName) {
    return new Promise((resolve, reject) => {
        const liteFileName = fileName.replace('.', '_lite.');
        const liteFileLocation = path.join(rulesDir, 'filterlists', liteFileName);
        const stream = fs.createWriteStream(liteFileLocation, { flags: 'w' });

        stream.once('open', () => {
            for (const item in JSONList.rules) {
                JSONList.rules[item].forEach(filter => {
                    const abpRule = item + '##' + filter;
                    stream.write(abpRule + '\n');
                })
            }
            stream.end();
        })

        stream.on('finish', () => {
            console.log(`ABP format list written to ${liteFileLocation}`);
            resolve();
        })

        stream.on('error', (err) => {
            console.error(`An error occurred: ${err.message}`);
        });
    });

}

function combineFilterLists () {
    console.log(`Combining filterlists`);

    // TODO: consider using python-abp (flrender) to generate filterlist properly
    const filterlistContent = `
    [Adblock Plus 2.0]
    ! Title: CPM Cosmetic Filter List
    ! Based on EasyList ${easylistRevision}
    ! Generated on ${new Date().toISOString()}
    !------------------------General element hiding rules-------------------------!
    ${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_general_hide.txt'), 'utf-8')}
    !------------------------Specific element hiding rules------------------------!
    ${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_specific_hide_lite.txt'), 'utf-8')}
    ${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_specific_uBO_lite.txt'), 'utf-8')}
    !------------------------Rules for international sites------------------------!
    ${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_international_specific_hide_lite.txt'), 'utf-8')}
    !---------------------------------Allowlists----------------------------------!
    ${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_allowlist_general_hide.txt'), 'utf-8')}
    !--------------------------------DDG overrides--------------------------------!
    ${fs.readFileSync(path.join(rulesDir, 'filterlists', 'overrides.txt'), 'utf-8')}
    `;

    fs.writeFile(path.join(rulesDir, 'filterlist.txt'), filterlistContent, () => console.log('Written filterlist.txt'));
}

async function rebuildFilterList () {
    await processFilterList('easylist_cookie_specific_uBO.txt');
    await processFilterList('easylist_cookie_specific_hide.txt');
    await processFilterList('easylist_cookie_international_specific_hide.txt');
    combineFilterLists();
}

rebuildFilterList();
