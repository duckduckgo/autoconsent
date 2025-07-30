import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.pornhub.com_q2j', ['https://it.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
