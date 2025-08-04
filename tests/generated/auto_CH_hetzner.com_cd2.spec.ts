import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hetzner.com_cd2', ['https://www.hetzner.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
