import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_svtplay.se_ujn', ['https://www.svtplay.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
