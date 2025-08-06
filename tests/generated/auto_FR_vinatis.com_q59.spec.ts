import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vinatis.com_q59', ['https://www.vinatis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
