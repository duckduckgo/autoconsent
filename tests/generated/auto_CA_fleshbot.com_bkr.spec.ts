import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fleshbot.com_bkr', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
