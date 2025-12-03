import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tefal.nl_o4g', ['https://www.tefal.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
