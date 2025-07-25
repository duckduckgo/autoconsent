import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adultwork.com_hk0', ['https://adultwork.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
