import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_111tipps.de_a3d', ['https://www.111tipps.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
