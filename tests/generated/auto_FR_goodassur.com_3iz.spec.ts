import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_goodassur.com_3iz', ['https://goodassur.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
