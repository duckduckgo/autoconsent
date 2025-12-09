import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kerstland.nl_4ms', ['https://www.kerstland.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
