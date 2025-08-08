import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rentals.ca_cbl', ['https://rentals.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
