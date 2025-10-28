import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_c-pauli.de_h7c', ['https://www.c-pauli.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
