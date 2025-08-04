import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pl.pornhub.com_55k', ['https://pl.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
