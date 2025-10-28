import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cng.sante.fr_r05', ['https://www.cng.sante.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
