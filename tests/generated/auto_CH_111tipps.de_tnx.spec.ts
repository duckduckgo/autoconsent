import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_111tipps.de_tnx', ['https://www.111tipps.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
