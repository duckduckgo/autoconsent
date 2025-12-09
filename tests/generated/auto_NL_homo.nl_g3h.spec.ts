import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_homo.nl_g3h', ['https://www.homo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
