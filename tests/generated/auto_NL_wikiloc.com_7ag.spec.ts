import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wikiloc.com_7ag', ['https://www.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
