import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nhg.org_uw8', ['https://www.nhg.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
