import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kiabi.com_3h2', ['https://www.kiabi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
