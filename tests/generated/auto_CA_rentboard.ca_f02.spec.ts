import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rentboard.ca_f02', ['https://www.rentboard.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
