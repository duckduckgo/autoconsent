import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dordogne.fr_pyp', ['https://www.dordogne.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
