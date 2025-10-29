import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wildkamp.nl_6ha', ['https://www.wildkamp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
