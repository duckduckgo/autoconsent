import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_crescat.io_t63', ['https://crescat.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
