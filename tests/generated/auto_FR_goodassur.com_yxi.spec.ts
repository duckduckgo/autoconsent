import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_goodassur.com_yxi', ['https://goodassur.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
