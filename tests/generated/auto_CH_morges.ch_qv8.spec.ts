import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_morges.ch_qv8', ['https://www.morges.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
