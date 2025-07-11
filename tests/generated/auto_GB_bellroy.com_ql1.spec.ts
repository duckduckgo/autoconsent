import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bellroy.com_ql1', ['https://bellroy.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
