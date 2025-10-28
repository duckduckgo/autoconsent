import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_adp.ca_ppv', ['https://www.adp.ca/en.aspx'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
