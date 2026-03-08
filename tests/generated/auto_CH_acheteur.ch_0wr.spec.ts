import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_acheteur.ch_0wr', ['https://acheteur.ch/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
