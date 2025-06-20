import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_remove.bg_0', ['https://www.remove.bg/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
