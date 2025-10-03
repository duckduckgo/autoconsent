import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tfl.gov.uk_z44', ['https://tfl.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
