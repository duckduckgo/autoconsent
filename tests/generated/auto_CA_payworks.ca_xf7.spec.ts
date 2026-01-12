import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_payworks.ca_xf7', ['https://www.payworks.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
