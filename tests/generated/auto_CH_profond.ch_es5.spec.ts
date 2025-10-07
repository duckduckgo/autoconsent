import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_profond.ch_es5', ['https://www.profond.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
