import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tuhlteim.de_gyh', ['https://tuhlteim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
