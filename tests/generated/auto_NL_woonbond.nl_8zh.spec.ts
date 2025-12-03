import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_woonbond.nl_8zh', ['https://www.woonbond.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
