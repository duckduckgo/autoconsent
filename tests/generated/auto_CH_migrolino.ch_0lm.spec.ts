import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_migrolino.ch_0lm', ['https://www.migrolino.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
