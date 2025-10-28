import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_money.it_hzy', ['https://www.money.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
