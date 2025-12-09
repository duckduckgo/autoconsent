import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_piguet.com_9a3', ['https://www.piguet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
