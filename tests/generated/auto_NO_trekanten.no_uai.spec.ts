import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trekanten.no_uai', ['https://trekanten.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
