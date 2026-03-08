import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_crosman.ca_0tw', ['https://crosman.ca/cen/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
