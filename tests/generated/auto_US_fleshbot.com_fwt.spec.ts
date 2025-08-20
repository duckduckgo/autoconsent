import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fleshbot.com_fwt', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
