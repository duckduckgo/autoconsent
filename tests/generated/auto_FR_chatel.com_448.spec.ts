import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chatel.com_448', ['https://www.chatel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
