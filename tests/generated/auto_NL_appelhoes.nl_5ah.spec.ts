import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_appelhoes.nl_5ah', ['https://www.appelhoes.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
