import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_effe.ch_10w', ['https://effe.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
