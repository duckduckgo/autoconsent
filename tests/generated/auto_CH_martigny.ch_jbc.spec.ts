import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_martigny.ch_jbc', ['https://www.martigny.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
