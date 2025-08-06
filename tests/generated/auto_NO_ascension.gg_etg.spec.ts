import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ascension.gg_etg', ['https://ascension.gg/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
