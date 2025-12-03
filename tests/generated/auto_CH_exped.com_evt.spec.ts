import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_exped.com_evt', ['https://www.exped.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
