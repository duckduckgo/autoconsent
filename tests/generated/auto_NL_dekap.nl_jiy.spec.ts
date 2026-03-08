import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dekap.nl_jiy', ['https://dekap.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
