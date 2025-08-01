import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kiabi.com_ju8', ['https://www.kiabi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
