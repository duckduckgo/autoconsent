import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pl.redtube.com_lny', ['https://pl.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
