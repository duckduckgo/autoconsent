import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_modebayard.ch_o56', ['https://modebayard.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
