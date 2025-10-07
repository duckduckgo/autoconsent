import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dedoelen.nl_vxk', ['https://www.dedoelen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
