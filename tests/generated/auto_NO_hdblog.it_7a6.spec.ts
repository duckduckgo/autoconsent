import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hdblog.it_7a6', ['https://www.hdblog.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
