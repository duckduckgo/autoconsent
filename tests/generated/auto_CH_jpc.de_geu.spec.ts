import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jpc.de_geu', ['https://www.jpc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
