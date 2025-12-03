import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wandelnet.nl_i0c', ['https://www.wandelnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
