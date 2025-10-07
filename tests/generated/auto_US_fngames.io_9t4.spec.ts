import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fngames.io_9t4', ['https://fngames.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
