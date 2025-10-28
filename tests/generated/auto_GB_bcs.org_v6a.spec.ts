import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bcs.org_v6a', ['https://www.bcs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
