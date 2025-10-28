import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_3sat.de_rmk', ['https://www.3sat.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
