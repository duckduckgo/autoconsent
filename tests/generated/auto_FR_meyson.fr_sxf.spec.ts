import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meyson.fr_sxf', ['https://www.meyson.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
