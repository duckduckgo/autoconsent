import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mitacs.ca_lri', ['https://www.mitacs.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
