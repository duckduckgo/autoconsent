import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_buynumber.io_r0b', ['https://buynumber.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
