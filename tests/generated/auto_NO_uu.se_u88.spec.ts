import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_uu.se_u88', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
