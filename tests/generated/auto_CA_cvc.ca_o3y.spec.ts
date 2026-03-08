import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cvc.ca_o3y', ['https://cvc.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
