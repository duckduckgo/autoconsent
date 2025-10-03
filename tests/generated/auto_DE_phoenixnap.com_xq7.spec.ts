import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phoenixnap.com_xq7', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
