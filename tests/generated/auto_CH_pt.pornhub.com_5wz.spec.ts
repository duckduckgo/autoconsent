import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pt.pornhub.com_5wz', ['https://pt.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
