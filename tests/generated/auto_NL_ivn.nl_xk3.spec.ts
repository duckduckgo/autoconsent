import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ivn.nl_xk3', ['https://www.ivn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
