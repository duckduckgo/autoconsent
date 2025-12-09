import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vy.se_d6h', ['https://www.vy.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
