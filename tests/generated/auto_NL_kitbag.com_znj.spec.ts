import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kitbag.com_znj', ['https://www.kitbag.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
