import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bpsy.ch_eow', ['https://bpsy.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
