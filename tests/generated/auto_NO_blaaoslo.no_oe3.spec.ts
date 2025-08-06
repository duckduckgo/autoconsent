import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_blaaoslo.no_oe3', ['https://www.blaaoslo.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
