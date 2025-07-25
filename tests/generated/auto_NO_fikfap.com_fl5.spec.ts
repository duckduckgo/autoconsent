import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fikfap.com_fl5', ['https://fikfap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
