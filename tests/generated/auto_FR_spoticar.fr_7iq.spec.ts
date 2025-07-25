import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spoticar.fr_7iq', ['https://www.spoticar.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
