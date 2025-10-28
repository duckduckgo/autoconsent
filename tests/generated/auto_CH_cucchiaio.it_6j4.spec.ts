import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cucchiaio.it_6j4', ['https://www.cucchiaio.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
