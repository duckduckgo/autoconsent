import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_uu.se_zpk', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
