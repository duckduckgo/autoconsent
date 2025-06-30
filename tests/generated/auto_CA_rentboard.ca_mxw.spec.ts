import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rentboard.ca_mxw', ['https://www.rentboard.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
