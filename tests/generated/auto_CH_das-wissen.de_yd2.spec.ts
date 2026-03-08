import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_das-wissen.de_yd2', ['https://das-wissen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
