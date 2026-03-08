import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fnigc.ca_vj4', ['https://fnigc.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
