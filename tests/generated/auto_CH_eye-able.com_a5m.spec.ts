import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eye-able.com_a5m', ['https://eye-able.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
