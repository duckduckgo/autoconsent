import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_honning.no_d8f', ['https://honning.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
