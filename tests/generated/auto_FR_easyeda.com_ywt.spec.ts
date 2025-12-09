import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_easyeda.com_ywt', ['https://easyeda.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
