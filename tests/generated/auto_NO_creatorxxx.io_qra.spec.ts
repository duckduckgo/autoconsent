import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_creatorxxx.io_qra', ['https://creatorxxx.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
