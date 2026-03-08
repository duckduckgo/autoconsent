import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_crestjazz.com_w29', ['https://crestjazz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
