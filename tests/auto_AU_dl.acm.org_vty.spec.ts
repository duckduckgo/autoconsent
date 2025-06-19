import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_dl.acm.org_vty', ['https://dl.acm.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
