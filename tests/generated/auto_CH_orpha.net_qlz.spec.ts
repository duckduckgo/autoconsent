import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_orpha.net_qlz', ['https://www.orpha.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
