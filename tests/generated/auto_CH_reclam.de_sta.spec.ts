import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reclam.de_sta', ['https://www.reclam.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
