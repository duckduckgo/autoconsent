import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_popsci.com_ced', ['https://www.popsci.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
