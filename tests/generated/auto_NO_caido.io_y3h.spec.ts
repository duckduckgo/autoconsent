import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_caido.io_y3h', ['https://caido.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
