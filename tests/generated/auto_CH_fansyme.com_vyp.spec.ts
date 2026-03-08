import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fansyme.com_vyp', ['https://fansyme.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
