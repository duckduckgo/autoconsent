import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_anime-sama.fr_lkf', ['https://anime-sama.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
