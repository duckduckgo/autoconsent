import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wandelnet.nl_uoi', ['https://www.wandelnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
