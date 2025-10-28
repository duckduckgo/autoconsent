import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_partoch.com_hsn', ['https://www.partoch.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
