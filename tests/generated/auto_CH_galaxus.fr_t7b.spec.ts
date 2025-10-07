import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_galaxus.fr_t7b', ['https://www.galaxus.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
