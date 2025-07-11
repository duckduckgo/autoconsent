import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_monkeytype.com_0', ['https://monkeytype.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
