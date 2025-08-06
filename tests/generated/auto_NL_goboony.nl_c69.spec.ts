import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_goboony.nl_c69', ['https://www.goboony.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
