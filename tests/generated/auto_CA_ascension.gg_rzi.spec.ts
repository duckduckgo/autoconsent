import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ascension.gg_rzi', ['https://ascension.gg/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
