import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ascension.gg_uk0', ['https://ascension.gg/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
