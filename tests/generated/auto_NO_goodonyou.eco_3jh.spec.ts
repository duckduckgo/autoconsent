import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_goodonyou.eco_3jh', ['https://goodonyou.eco/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
