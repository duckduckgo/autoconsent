import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bellroy.com_sl0', ['https://bellroy.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
