import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iadfrance.fr_nnr', ['https://www.iadfrance.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
