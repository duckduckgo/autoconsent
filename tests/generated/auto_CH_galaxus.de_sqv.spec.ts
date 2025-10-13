import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_galaxus.de_sqv', ['https://www.galaxus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
