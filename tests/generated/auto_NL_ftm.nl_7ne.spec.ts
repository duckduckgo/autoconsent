import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ftm.nl_7ne', ['https://www.ftm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
