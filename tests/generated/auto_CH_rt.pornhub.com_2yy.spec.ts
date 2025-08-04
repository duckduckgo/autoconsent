import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rt.pornhub.com_2yy', ['https://rt.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
