import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tina.io_pzt', ['https://tina.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
