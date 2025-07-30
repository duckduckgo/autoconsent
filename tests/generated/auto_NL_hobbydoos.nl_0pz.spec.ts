import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hobbydoos.nl_0pz', ['https://www.hobbydoos.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
