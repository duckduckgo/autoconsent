import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vesteda.com_8ov', ['https://www.vesteda.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
