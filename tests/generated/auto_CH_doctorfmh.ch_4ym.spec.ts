import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_doctorfmh.ch_4ym', ['https://doctorfmh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
