import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afdas.com_ozj', ['https://www.afdas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
