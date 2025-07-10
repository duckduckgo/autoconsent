import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_keurig.ca_xf2', ['https://www.keurig.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
