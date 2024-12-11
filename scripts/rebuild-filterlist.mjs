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
const MAX_DOMAIN_RANK = 500000

let uBOList, domainMap

function processFiltersIntoJson (listFileName) {
    const data = fs.readFileSync(path.join(rulesDir, 'filterlists', listFileName), 'utf-8');
    const lines = data.split('\n');
    const filterlistJSON = {"rules": {}}

    // first remove irrelevant rules
    const filteredLines = lines.filter(line => !line.startsWith('!') &&
                                               !line.startsWith('##') &&
                                               !line.startsWith('||') &&
                                               !line.includes(':remove') &&
                                               !line.includes(':upward') &&
                                               !line.includes('redirect-rule'));
    // dump rules into json structure for parsing
    for (const line in filteredLines) {
        const rule = filteredLines[line]
        const splitRule = rule.split('##')
        const target = splitRule[0]
        const action = splitRule[1]

        if (!target || !action) {
            continue
        }

        if (!filterlistJSON.rules[target]) {
            filterlistJSON.rules[target] = [action]
        } else {
            filterlistJSON.rules[target].push(action)
        }
    }

    // remove any targets that contain a +js rule. we do it this way because
    // when a target has a :js rule, we must also remove any css rules
    for (const item in filterlistJSON.rules) {
        const containsJS = filterlistJSON.rules[item].some(filter => filter.includes('+js'))
        if (containsJS) {
            delete filterlistJSON.rules[item]
        }
    }

    // remove longtail domain rules using tranco data
    for (const item in filterlistJSON.rules) {
        let domains;

        if (item.includes(',')) {
            domains = item.split(',');
        } else {
            domains = [item]
        }

        const filteredDomains = domains.filter(domain => {
            const tlDomain = getDomain(domain);
            return isPopularDomain(tlDomain);
        });

        // if no domains meet cutoff, remove rule entirely. if one or more
        // domains meet cutoff, remove those that don't
        if (filteredDomains.length === 0) {
            delete filterlistJSON.rules[item]
        } else if (filteredDomains.length !== domains.length) {
            const filteredDomainString = filteredDomains.join(',')
            filterlistJSON.rules[filteredDomainString] = filterlistJSON.rules[item]
            delete filterlistJSON.rules[item]
        }
    }

    fs.writeFileSync(path.join(rulesDir, 'filterlist.json'), JSON.stringify(filterlistJSON, null, 4));
    console.log('written')
}

function isPopularDomain (domain) {
    // first load tranco csv into Map for easy querying
    if (typeof domainMap !== 'object') {
        console.log('loading tranco')
        loadTrancoList()
    }

    const match = domainMap.has(domain)

    return match
}

function loadTrancoList () {
    const records = parse(trancoCSV, {
        columns: false,
        skip_empty_lines: true
    });

    domainMap = new Map();
    
    // we want to query by domain, so flip columns
    records.slice(0, MAX_DOMAIN_RANK).forEach(([key, value]) => {
        domainMap.set(value, key);
    });
//    console.log("rank", domainMap.get('mega.io'))
}
//loadTrancoList()
processFiltersIntoJson('easylist_cookie_specific_uBO.txt');

function filterCruft (listFileName) {
    const data = fs.readFileSync(path.join(rulesDir, 'filterlists', listFileName), 'utf-8');
    const lines = data.split('\n');

    const filteredLines = lines.filter(line => !line.startsWith('!') &&
                                               !line.includes('+js') &&
                                               !line.includes(':remove') &&
                                               !line.includes(':upward') &&
                                               !line.includes('redirect-rule'));
    uBOList = filteredLines.join('\n');
}

//filterCruft('easylist_cookie_specific_uBO.txt');

// TODO: consider using python-abp (flrender) to generate filterlist properly
/*
const filterlistContent = `
[Adblock Plus 2.0]
! Title: CPM Cosmetic Filter List
! Based on EasyList ${easylistRevision}
! Generated on ${new Date().toISOString()}
!------------------------General element hiding rules-------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_general_hide.txt'), 'utf-8')}
!------------------------Specific element hiding rules------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_specific_hide.txt'), 'utf-8')}
${uBOList}
!------------------------Rules for international sites------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_international_specific_hide.txt'), 'utf-8')}
!---------------------------------Allowlists----------------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_allowlist_general_hide.txt'), 'utf-8')}
!--------------------------------DDG overrides--------------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'overrides.txt'), 'utf-8')}
`;

fs.writeFile(path.join(rulesDir, 'filterlist.txt'), filterlistContent, () => console.log('Written filterlist.txt'));
*/
