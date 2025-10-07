import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gld.nl_69q', ['https://www.gld.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
