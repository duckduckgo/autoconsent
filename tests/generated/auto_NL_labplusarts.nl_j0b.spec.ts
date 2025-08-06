import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_labplusarts.nl_j0b', ['https://labplusarts.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
