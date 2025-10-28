import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zivver.com_48n', ['https://www.zivver.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
