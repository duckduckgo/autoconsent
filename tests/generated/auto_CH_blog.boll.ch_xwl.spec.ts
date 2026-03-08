import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.boll.ch_xwl', ['https://blog.boll.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
