import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brickshop.nl_cms', ['https://www.brickshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
