import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wandelnet.nl_xk6', ['https://www.wandelnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
