import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_berninabern.ch_hwr', ['https://berninabern.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
