import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lrparts.net_tg1', ['https://www.lrparts.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
