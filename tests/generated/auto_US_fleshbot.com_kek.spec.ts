import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fleshbot.com_kek', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
