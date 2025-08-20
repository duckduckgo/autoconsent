import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pricewise.nl_b24', ['https://www.pricewise.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
