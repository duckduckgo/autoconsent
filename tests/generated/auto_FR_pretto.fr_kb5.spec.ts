import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pretto.fr_kb5', ['https://www.pretto.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
