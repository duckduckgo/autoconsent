import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_whileint.com_y3a', ['https://whileint.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
