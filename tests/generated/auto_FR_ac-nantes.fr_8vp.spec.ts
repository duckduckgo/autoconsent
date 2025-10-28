import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-nantes.fr_8vp', ['https://www.ac-nantes.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
