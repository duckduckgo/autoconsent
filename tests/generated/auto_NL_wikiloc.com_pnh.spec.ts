import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wikiloc.com_pnh', ['https://www.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
