import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agefiph.fr_tka', ['https://www.agefiph.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
