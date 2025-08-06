import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iadfrance.fr_pe8', ['https://www.iadfrance.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
