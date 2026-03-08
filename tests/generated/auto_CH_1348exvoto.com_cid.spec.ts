import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_1348exvoto.com_cid', ['https://1348exvoto.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
