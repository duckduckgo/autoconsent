import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nwo.nl_d5r', ['https://www.nwo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
