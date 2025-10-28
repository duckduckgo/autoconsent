import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pneusclaude.ch_ved', ['https://pneusclaude.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
