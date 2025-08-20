import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pmt.nl_yds', ['https://www.pmt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
