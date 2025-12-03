import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hobbyshop.ch_g7f', ['https://www.hobbyshop.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
