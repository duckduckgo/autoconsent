import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fngames.io_i4c', ['https://fngames.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
