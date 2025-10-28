import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eyrolles.com_94d', ['https://www.eyrolles.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
