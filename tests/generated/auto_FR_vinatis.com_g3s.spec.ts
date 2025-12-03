import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vinatis.com_g3s', ['https://www.vinatis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
