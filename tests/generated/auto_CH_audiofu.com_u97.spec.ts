import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_audiofu.com_u97', ['https://audiofu.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
