import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wandelnet.nl_6rp', ['https://www.wandelnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
