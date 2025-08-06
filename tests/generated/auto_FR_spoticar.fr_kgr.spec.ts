import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spoticar.fr_kgr', ['https://www.spoticar.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
