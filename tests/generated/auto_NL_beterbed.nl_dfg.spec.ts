import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beterbed.nl_dfg', ['https://www.beterbed.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
