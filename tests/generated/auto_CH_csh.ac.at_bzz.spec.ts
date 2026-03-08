import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_csh.ac.at_bzz', ['https://csh.ac.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
