import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bookgame.io_mre', ['https://bookgame.io/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
