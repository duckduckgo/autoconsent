import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bnorsk.no_gk7', ['https://www.bnorsk.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
