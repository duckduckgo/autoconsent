import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_emojiterra.com_3ng', ['https://emojiterra.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
