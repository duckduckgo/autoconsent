import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_emojiterra.com_grw', ['https://emojiterra.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
