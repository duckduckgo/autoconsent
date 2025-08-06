import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_klm.fr_qcw', ['https://www.klm.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
