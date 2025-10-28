import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mba-lyon.fr_5zu', ['https://www.mba-lyon.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
