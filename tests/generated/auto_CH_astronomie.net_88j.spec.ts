import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_astronomie.net_88j', ['https://astronomie.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
