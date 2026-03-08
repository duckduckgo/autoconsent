import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brainkind.org_1bm', ['https://brainkind.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
