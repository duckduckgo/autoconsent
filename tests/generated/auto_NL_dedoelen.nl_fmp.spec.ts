import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dedoelen.nl_fmp', ['https://www.dedoelen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
