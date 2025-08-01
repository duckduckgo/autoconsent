import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hetzner.com_a6k', ['https://www.hetzner.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
