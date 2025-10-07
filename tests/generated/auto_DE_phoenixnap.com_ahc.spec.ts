import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phoenixnap.com_ahc', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
