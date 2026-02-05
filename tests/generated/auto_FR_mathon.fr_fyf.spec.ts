import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mathon.fr_fyf', ['https://www.mathon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
