import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_phoenixnap.com_hq3', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
