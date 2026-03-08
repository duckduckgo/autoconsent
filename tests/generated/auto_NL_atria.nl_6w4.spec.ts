import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_atria.nl_6w4', ['https://atria.nl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
