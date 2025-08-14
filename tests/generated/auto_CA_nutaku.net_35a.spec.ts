import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nutaku.net_35a', ['https://www.nutaku.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
