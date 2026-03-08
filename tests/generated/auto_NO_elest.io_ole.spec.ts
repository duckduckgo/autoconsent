import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_elest.io_ole', ['https://elest.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
