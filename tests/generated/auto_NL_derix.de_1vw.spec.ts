import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_derix.de_1vw', ['https://derix.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
