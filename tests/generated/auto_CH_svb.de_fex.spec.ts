import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_svb.de_fex', ['https://www.svb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
