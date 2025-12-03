import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rvdealers.ca_bvc', ['https://www.rvdealers.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
