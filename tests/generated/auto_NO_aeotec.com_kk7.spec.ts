import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aeotec.com_kk7', ['https://aeotec.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
