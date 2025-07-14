import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bellroy.com_hyq', ['https://bellroy.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
