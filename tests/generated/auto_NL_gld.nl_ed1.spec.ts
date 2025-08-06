import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gld.nl_ed1', ['https://www.gld.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
