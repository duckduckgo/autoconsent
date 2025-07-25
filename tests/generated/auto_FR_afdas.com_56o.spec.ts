import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afdas.com_56o', ['https://www.afdas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
