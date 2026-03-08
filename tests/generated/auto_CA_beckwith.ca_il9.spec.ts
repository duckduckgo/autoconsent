import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_beckwith.ca_il9', ['https://beckwith.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
