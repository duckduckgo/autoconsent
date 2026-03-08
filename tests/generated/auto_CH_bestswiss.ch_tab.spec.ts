import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bestswiss.ch_tab', ['https://bestswiss.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
