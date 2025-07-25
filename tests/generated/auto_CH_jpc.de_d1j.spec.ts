import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jpc.de_d1j', ['https://www.jpc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
