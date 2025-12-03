import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fngames.io_hj5', ['https://fngames.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
