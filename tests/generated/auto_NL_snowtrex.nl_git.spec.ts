import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_snowtrex.nl_git', ['https://www.snowtrex.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
