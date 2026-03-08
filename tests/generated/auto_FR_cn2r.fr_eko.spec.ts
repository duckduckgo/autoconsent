import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cn2r.fr_eko', ['https://cn2r.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
