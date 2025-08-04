import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_phoenixnap.com_8zk', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
