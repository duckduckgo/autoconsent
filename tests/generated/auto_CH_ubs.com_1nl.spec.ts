import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ubs.com_1nl', ['https://www.ubs.com/ch/en.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
