import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fanpage.it_8tk', ['https://www.fanpage.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
