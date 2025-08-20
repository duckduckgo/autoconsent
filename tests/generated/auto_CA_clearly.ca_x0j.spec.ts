import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_clearly.ca_x0j', ['https://www.clearly.ca/en-ca'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
