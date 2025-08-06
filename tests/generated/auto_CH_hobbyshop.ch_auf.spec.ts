import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hobbyshop.ch_auf', ['https://www.hobbyshop.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
