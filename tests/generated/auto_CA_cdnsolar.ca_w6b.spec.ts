import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cdnsolar.ca_w6b', ['https://cdnsolar.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
