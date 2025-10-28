import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zorgsaam.org_wxt', ['https://www.zorgsaam.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
