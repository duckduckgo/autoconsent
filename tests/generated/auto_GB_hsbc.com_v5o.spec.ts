import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hsbc.com_v5o', ['https://www.hsbc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
