import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_33d.ch_xad', ['https://33d.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
