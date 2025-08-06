import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_whileint.com_g0c', ['https://whileint.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
