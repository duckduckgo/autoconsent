import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_colisprive.fr_ick', ['https://colisprive.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
