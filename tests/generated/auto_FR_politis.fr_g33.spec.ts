import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_politis.fr_g33', ['https://www.politis.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
