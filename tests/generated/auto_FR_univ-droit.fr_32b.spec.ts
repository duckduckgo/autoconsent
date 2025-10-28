import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-droit.fr_32b', ['https://univ-droit.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
