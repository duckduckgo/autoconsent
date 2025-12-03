import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_effenaar.nl_nia', ['https://www.effenaar.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
