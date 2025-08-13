import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ford.nl_ybn', ['https://www.ford.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
