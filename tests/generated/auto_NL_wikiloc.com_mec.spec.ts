import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wikiloc.com_mec', ['https://www.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
