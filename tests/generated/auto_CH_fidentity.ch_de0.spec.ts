import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fidentity.ch_de0', ['https://fidentity.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
