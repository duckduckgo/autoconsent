import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vdberk.nl_bn0', ['https://www.vdberk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
