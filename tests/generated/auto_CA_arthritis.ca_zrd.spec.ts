import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_arthritis.ca_zrd', ['https://arthritis.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
