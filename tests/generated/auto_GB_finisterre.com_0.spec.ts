import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_finisterre.com_0', ['https://finisterre.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
