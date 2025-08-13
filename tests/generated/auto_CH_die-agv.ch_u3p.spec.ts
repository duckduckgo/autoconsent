import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_die-agv.ch_u3p', ['https://die-agv.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
