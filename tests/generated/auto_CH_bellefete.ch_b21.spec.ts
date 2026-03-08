import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bellefete.ch_b21', ['https://bellefete.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
