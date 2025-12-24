import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_inrs.ca_vri', ['https://inrs.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
