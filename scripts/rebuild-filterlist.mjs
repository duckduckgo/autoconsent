#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rulesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../rules');

const easylistRevision = fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_revision.txt'), 'utf-8');

// TODO: consider using python-abp (flrender) to generate filterlist properly
const filterlistContent = `
[Adblock Plus 2.0]
! Title: CPM Cosmetic Filter List
! Based on EasyList ${easylistRevision}
! DO NOT EDIT MANUALLY, your changes will be lost
! Generated on ${new Date().toISOString()}
!------------------------General element hiding rules-------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_general_hide.txt'), 'utf-8')}
!------------------------Specific element hiding rules------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_specific_hide.txt'), 'utf-8')}
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_specific_uBO.txt'), 'utf-8')}
!------------------------Rules for international sites------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_international_specific_hide.txt'), 'utf-8')}
!---------------------------------Allowlists----------------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_allowlist_general_hide.txt'), 'utf-8')}
!--------------------------------DDG overrides--------------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'overrides.txt'), 'utf-8')}
`;

fs.writeFile(path.join(rulesDir, 'filterlist.txt'), filterlistContent, () => console.log('Written filterlist.txt'));
