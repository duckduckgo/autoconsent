import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cira.ca_rms', ['https://www.cira.ca/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
