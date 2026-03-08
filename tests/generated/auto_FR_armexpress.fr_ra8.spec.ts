import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_armexpress.fr_ra8', ['https://armexpress.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
