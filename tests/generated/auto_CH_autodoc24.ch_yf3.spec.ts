import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autodoc24.ch_yf3', ['https://www.autodoc24.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
