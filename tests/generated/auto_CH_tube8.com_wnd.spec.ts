import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tube8.com_wnd', ['https://www.tube8.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
