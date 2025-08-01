import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wandelnet.nl_1di', ['https://www.wandelnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
