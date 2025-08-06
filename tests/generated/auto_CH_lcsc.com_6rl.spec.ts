import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lcsc.com_6rl', ['https://www.lcsc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
