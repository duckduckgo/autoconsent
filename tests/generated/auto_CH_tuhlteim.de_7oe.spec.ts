import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tuhlteim.de_7oe', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
