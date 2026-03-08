import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_duflor.com_rkr', ['https://duflor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
