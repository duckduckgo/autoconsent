import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.wikiloc.com_xwl', ['https://nl.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
