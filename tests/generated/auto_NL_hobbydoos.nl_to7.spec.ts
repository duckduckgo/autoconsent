import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hobbydoos.nl_to7', ['https://www.hobbydoos.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
