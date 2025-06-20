import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ancestry.com_0', ['https://www.ancestry.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
