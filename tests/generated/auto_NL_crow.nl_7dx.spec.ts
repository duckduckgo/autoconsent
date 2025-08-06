import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_crow.nl_7dx', ['https://www.crow.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
