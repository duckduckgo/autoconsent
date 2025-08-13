import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_asga.ch_20o', ['https://www.asga.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
