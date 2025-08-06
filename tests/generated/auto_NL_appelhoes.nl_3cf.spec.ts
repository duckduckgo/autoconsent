import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_appelhoes.nl_3cf', ['https://www.appelhoes.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
