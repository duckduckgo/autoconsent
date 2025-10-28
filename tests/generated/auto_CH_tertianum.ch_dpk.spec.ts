import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tertianum.ch_dpk', ['https://www.tertianum.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
