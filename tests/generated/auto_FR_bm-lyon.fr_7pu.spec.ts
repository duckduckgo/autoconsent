import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bm-lyon.fr_7pu', ['https://www.bm-lyon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
