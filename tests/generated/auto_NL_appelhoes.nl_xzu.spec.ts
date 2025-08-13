import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_appelhoes.nl_xzu', ['https://www.appelhoes.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
