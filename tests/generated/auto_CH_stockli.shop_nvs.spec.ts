import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stockli.shop_nvs', ['https://stockli.shop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
