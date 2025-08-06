import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fanpage.it_jji', ['https://www.fanpage.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
