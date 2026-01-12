import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dodo.fr_lo1', ['https://www.dodo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
