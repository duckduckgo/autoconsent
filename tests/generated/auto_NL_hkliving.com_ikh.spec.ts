import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hkliving.com_ikh', ['https://www.hkliving.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
