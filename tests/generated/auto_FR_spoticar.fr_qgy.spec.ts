import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spoticar.fr_qgy', ['https://www.spoticar.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
