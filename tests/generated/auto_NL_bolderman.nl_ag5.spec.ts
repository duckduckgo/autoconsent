import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bolderman.nl_ag5', ['https://www.bolderman.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
