import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ewall-shop.com_wnr', ['https://ewall-shop.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
