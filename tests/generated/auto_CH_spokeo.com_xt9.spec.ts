import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_spokeo.com_xt9', ['https://www.spokeo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
