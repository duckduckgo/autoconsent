import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_whileint.com_q5h', ['https://whileint.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
