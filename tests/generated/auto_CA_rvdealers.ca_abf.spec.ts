import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rvdealers.ca_abf', ['https://www.rvdealers.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
