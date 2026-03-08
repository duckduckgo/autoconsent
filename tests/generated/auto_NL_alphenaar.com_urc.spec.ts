import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alphenaar.com_urc', ['https://alphenaar.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
