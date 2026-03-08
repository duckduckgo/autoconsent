import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cf.eelv.fr_okq', ['https://cf.eelv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
