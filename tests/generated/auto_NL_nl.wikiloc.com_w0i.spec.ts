import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.wikiloc.com_w0i', ['https://nl.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
