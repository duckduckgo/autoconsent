import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hobbydoos.nl_yah', ['https://www.hobbydoos.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
