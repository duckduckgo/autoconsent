import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nrjmobile.fr_z3z', ['https://www.nrjmobile.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
