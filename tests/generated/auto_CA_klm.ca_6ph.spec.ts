import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_klm.ca_6ph', ['https://www.klm.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
