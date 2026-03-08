import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fsgv.ca_yc5', ['https://fsgv.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
