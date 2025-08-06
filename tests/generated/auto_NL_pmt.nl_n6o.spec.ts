import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pmt.nl_n6o', ['https://www.pmt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
