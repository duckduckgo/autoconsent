import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amazingtoys.ch_him', ['https://amazingtoys.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
