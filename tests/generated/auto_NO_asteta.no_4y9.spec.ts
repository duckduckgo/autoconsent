import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_asteta.no_4y9', ['https://asteta.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
