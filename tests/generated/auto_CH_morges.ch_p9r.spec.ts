import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_morges.ch_p9r', ['https://www.morges.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
