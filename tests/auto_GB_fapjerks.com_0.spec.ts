import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_fapjerks.com_0', ['https://fapjerks.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
