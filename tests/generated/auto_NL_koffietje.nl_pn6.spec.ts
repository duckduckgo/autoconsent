import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_koffietje.nl_pn6', ['https://www.koffietje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
