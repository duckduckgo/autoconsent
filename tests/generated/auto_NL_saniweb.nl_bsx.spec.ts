import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_saniweb.nl_bsx', ['https://www.saniweb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
