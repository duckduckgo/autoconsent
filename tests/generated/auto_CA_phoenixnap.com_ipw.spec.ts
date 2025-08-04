import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_phoenixnap.com_ipw', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
