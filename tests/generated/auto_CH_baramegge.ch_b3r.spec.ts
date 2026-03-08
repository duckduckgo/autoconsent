import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baramegge.ch_b3r', ['https://baramegge.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
