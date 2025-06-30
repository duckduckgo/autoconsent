import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_smarkets.com_0', ['https://smarkets.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
