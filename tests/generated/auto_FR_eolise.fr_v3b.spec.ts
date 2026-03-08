import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eolise.fr_v3b', ['https://eolise.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
