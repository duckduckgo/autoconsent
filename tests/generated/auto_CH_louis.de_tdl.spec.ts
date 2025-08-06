import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_louis.de_tdl', ['https://www.louis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
