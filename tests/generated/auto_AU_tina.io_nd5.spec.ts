import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tina.io_nd5', ['https://tina.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
