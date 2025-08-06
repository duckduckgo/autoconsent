import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cedeo.fr_s28', ['https://www.cedeo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
