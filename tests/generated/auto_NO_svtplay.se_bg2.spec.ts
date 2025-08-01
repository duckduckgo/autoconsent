import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_svtplay.se_bg2', ['https://www.svtplay.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
