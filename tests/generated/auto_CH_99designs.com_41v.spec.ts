import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_99designs.com_41v', ['https://en.99designs.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
