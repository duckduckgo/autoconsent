import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_divorce.ch_1rh', ['https://divorce.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
