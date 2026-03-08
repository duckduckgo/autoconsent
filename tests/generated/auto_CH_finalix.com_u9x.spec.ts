import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_finalix.com_u9x', ['https://finalix.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
