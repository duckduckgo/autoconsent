import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dietlikon.ch_qdk', ['https://www.dietlikon.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
