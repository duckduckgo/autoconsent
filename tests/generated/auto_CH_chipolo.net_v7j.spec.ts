import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chipolo.net_v7j', ['https://chipolo.net/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
