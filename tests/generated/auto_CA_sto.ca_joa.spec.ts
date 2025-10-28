import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sto.ca_joa', ['https://www.sto.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
