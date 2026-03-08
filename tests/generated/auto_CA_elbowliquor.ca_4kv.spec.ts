import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_elbowliquor.ca_4kv', ['https://elbowliquor.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
