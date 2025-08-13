import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_louis.de_hh5', ['https://www.louis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
