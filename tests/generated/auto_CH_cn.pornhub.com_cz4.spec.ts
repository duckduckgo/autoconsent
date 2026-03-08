import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cn.pornhub.com_cz4', ['https://cn.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
