import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_resalib.fr_lkb', ['https://www.resalib.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
