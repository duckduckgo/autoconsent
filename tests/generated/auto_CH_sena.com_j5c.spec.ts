import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sena.com_j5c', ['https://www.sena.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
