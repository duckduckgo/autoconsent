import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_knoowy.nl_vt5', ['https://knoowy.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
