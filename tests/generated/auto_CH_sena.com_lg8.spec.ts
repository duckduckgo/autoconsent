import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sena.com_lg8', ['https://www.sena.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
