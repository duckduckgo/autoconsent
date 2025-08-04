import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pl.pornhub.com_5gm', ['https://pl.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
