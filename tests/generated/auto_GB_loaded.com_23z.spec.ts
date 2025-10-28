import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_loaded.com_23z', ['https://www.loaded.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
