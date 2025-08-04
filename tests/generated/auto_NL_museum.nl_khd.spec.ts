import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_museum.nl_khd', ['https://www.museum.nl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
