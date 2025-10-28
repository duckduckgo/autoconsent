import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rebuy.de_qh9', ['https://www.rebuy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
