import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lalettre.fr_yqo', ['https://www.lalettre.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
