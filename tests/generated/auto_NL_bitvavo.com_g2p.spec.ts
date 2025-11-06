import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bitvavo.com_g2p', ['https://bitvavo.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
