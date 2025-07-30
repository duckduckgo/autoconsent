import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pl.redtube.com_j8g', ['https://pl.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
