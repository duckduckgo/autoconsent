import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pretto.fr_fpe', ['https://www.pretto.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
