import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.wix.com_wo1', ['https://nl.wix.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
