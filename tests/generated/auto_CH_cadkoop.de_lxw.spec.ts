import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cadkoop.de_lxw', ['https://cadkoop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
