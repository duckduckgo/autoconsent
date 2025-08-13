import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fanpage.it_671', ['https://www.fanpage.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
