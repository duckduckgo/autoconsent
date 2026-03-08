import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_420shop.nl_x26', ['https://420shop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
