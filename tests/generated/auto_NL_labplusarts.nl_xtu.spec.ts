import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_labplusarts.nl_xtu', ['https://labplusarts.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
