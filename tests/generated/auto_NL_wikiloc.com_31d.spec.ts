import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wikiloc.com_31d', ['https://www.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
