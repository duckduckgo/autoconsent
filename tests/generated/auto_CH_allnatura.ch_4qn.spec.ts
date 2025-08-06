import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_allnatura.ch_4qn', ['https://www.allnatura.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
