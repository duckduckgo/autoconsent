import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_coinbase.com_cd9', ['https://www.coinbase.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
