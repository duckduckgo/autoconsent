import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_by-kees.nl_ymd', ['https://by-kees.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
