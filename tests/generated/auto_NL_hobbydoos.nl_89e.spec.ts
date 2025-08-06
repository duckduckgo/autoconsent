import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hobbydoos.nl_89e', ['https://www.hobbydoos.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
