import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rentals.ca_kc8', ['https://rentals.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
