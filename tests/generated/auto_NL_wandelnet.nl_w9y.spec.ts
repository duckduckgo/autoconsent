import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wandelnet.nl_w9y', ['https://www.wandelnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
