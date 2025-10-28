import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_igen.fr_khn', ['https://www.igen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
