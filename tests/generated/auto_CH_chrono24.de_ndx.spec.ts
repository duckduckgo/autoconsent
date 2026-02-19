import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chrono24.de_ndx', ['https://www.chrono24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
