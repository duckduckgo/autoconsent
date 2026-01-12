import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uwv.nl_bh7', ['https://www.uwv.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
