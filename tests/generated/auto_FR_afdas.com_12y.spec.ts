import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afdas.com_12y', ['https://www.afdas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
