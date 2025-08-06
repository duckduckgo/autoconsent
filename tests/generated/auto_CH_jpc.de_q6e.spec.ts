import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jpc.de_q6e', ['https://www.jpc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
