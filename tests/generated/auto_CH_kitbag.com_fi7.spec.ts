import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kitbag.com_fi7', ['https://www.kitbag.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
