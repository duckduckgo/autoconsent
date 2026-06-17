#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rulesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../rules');

/**
 * Combine all filter lists into a single filterlist.txt
 */
function combineFilterLists() {
    const filterlistContent = `[Adblock Plus 2.0]
! Title: CPM Cosmetic Filter List
! DO NOT EDIT MANUALLY, your changes will be lost
! Generated on ${new Date().toISOString()}
!--------------------------------DDG overrides--------------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'overrides.txt'), 'utf-8')}
`;

    fs.writeFile(path.join(rulesDir, 'filterlist.txt'), filterlistContent, () => console.log('Written filterlist.txt'));
}

combineFilterLists();
