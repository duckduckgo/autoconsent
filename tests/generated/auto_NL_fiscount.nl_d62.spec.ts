import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fiscount.nl_d62', ['https://www.fiscount.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
