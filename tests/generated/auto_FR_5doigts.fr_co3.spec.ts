import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_5doigts.fr_co3', ['https://5doigts.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
