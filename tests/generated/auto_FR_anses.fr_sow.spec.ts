import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anses.fr_sow', ['https://www.anses.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
