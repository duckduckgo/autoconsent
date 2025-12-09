import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_snowtrex.nl_njw', ['https://www.snowtrex.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
