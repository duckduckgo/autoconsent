import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_caj.ca_4p0', ['https://caj.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
