import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zdf.de_wtd', ['https://www.zdf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
