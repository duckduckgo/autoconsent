import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.kviknes.no_v80', ['https://en.kviknes.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
