import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.wikiloc.com_7m7', ['https://nl.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
