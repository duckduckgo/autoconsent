import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kiwi.com_4l9', ['https://www.kiwi.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
