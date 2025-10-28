import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rozet.nl_xqq', ['https://rozet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
