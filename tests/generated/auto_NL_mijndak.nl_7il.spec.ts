import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijndak.nl_7il', ['https://mijndak.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
