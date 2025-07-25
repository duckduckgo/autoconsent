import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bolderman.nl_bxc', ['https://www.bolderman.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
