import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_phoenixnap.com_sqq', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
