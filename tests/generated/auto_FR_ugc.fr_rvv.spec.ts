import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ugc.fr_rvv', ['https://www.ugc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
