import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amazon.it_bho', ['https://www.amazon.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
