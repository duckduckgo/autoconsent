import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dz.nl_n1f', ['https://www.dz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
