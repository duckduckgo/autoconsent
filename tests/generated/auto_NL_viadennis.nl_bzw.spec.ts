import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_viadennis.nl_bzw', ['https://viadennis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
