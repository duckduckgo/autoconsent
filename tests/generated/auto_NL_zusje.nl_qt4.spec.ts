import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zusje.nl_qt4', ['https://zusje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
