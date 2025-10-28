import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hartinshape.nl_akl', ['https://hartinshape.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
