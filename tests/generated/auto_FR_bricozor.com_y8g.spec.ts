import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bricozor.com_y8g', ['https://www.bricozor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
