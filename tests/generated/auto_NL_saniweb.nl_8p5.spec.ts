import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_saniweb.nl_8p5', ['https://www.saniweb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
