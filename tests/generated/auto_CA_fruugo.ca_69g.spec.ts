import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fruugo.ca_69g', ['https://www.fruugo.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
