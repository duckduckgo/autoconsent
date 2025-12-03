import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fleshbot.com_m3j', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
