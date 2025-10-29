import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hu.nl_haa', ['https://www.hu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
