import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_philips.ca_yr9', ['https://www.philips.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
