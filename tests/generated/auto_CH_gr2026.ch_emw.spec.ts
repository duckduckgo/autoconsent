import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gr2026.ch_emw', ['https://gr2026.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
