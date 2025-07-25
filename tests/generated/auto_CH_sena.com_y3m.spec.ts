import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sena.com_y3m', ['https://www.sena.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
