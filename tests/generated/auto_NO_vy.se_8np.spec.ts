import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vy.se_8np', ['https://www.vy.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
