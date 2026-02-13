import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pl.redtube.com_7nh', ['https://pl.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
