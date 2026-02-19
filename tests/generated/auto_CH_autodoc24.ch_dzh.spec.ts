import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autodoc24.ch_dzh', ['https://www.autodoc24.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
