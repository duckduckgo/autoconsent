import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wildkamp.nl_4b9', ['https://www.wildkamp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
