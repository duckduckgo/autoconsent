import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_keurig.ca_11g', ['https://www.keurig.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
