import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chemorv.ca_nip', ['https://chemorv.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
