import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cedeo.fr_r59', ['https://www.cedeo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
