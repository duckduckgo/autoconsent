import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_hltv.org_0', ['https://www.hltv.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
