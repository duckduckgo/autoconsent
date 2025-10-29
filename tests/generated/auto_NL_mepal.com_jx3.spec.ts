import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mepal.com_jx3', ['https://www.mepal.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
