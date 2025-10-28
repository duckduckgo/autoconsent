import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lgdj.fr_tq6', ['https://www.lgdj.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
