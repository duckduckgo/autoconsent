import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pl.pornhub.com_f2u', ['https://pl.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
