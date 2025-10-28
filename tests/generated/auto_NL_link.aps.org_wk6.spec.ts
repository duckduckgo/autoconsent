import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_link.aps.org_wk6', ['https://link.aps.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
