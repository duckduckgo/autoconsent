import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.pornhub.com_3w4', ['https://it.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
