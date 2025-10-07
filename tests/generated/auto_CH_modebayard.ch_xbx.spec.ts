import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_modebayard.ch_xbx', ['https://modebayard.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
