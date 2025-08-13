import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_viadennis.nl_c49', ['https://viadennis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
