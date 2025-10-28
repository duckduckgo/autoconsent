import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jinka.fr_ib5', ['https://www.jinka.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
