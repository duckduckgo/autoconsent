import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_s-bb.nl_y9g', ['https://www.s-bb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
