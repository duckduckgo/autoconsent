import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hetzner.com_7tv', ['https://www.hetzner.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
