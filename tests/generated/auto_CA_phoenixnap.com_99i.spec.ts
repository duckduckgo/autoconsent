import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_phoenixnap.com_99i', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
