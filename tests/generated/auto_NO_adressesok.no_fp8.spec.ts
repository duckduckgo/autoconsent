import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adressesok.no_fp8', ['https://adressesok.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
