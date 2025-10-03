import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tuinplant.nl_lrp', ['https://www.tuinplant.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
