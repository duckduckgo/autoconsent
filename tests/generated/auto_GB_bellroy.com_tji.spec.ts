import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bellroy.com_tji', ['https://bellroy.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
