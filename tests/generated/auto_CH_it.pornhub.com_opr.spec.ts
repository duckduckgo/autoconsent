import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.pornhub.com_opr', ['https://it.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
