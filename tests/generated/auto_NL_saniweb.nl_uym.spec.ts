import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_saniweb.nl_uym', ['https://www.saniweb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
