import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_klm.ca_uvc', ['https://www.klm.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
