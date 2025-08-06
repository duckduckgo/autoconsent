import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_politis.fr_nro', ['https://www.politis.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
