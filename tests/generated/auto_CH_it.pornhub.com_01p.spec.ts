import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.pornhub.com_01p', ['https://it.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
