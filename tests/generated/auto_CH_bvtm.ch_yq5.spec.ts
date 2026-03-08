import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bvtm.ch_yq5', ['https://bvtm.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
