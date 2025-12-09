import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hpdetijd.nl_lds', ['https://www.hpdetijd.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
