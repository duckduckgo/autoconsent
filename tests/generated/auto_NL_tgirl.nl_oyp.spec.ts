import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tgirl.nl_oyp', ['https://www.tgirl.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
