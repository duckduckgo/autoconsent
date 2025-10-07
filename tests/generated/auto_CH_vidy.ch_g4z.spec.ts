import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vidy.ch_g4z', ['https://www.vidy.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
