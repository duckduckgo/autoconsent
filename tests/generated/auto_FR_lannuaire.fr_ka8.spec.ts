import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lannuaire.fr_ka8', ['https://www.lannuaire.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
