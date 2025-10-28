import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_smeguk.com_b8j', ['https://www.smeguk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
