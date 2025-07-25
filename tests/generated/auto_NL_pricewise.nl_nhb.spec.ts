import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pricewise.nl_nhb', ['https://www.pricewise.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
