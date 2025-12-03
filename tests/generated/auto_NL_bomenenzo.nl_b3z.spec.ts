import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bomenenzo.nl_b3z', ['https://www.bomenenzo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
