import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_artenda.net_r3m', ['https://artenda.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
