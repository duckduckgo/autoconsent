import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frenchmac.com_ht8', ['https://frenchmac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
