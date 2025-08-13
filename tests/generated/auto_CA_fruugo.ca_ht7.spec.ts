import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fruugo.ca_ht7', ['https://www.fruugo.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
