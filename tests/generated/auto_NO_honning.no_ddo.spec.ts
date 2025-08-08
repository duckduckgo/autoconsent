import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_honning.no_ddo', ['https://honning.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
