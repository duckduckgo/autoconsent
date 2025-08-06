import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dz.nl_cdd', ['https://www.dz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
