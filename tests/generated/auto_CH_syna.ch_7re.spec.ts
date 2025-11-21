import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_syna.ch_7re', ['https://syna.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
