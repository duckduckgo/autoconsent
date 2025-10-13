import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_svtplay.se_d39', ['https://www.svtplay.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
