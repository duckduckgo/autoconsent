import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cinhub.vip_hlr', ['https://cinhub.vip/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
