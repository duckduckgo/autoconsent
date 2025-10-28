import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fraulila.de_d1c', ['https://fraulila.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
