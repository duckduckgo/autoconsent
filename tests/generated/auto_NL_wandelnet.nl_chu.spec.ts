import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wandelnet.nl_chu', ['https://www.wandelnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
