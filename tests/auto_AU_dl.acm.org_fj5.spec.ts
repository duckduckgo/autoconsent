import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_dl.acm.org_fj5', ['https://dl.acm.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
