import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_blaaoslo.no_uej', ['https://www.blaaoslo.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
