import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_allonea.com_3l8', ['https://allonea.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
