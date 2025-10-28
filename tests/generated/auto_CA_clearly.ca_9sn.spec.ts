import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_clearly.ca_9sn', ['https://www.clearly.ca/en-ca'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
