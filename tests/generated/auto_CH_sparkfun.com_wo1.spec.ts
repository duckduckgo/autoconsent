import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sparkfun.com_wo1', ['https://www.sparkfun.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
