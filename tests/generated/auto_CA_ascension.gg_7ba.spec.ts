import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ascension.gg_7ba', ['https://ascension.gg/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
