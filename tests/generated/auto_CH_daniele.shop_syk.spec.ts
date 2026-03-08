import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_daniele.shop_syk', ['https://daniele.shop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
