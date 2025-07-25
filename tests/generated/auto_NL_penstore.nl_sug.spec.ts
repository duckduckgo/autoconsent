import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_penstore.nl_sug', ['https://www.penstore.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
