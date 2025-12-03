import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_koffietje.nl_o5u', ['https://www.koffietje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
