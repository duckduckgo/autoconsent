import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_esa.int_fhw', ['https://www.esa.int/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
