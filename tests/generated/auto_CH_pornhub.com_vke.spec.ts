import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pornhub.com_vke', ['https://www.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
