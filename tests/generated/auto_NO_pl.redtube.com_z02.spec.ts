import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pl.redtube.com_z02', ['https://pl.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
