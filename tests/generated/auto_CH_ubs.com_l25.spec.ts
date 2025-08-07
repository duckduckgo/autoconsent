import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ubs.com_l25', ['https://www.ubs.com/ch/en.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
