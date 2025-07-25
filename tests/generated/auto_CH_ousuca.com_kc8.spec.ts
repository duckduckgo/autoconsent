import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ousuca.com_kc8', ['https://ousuca.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
