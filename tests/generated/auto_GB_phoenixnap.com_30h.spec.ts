import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_phoenixnap.com_30h', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
