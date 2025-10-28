import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_magister.nl_gh7', ['https://magister.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
