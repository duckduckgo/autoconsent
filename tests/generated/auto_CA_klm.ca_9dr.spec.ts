import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_klm.ca_9dr', ['https://www.klm.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
