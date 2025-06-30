import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fleshbot.com_ngs', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
