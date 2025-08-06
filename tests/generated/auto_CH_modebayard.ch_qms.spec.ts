import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_modebayard.ch_qms', ['https://modebayard.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
