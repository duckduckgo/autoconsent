import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_crow.nl_4x0', ['https://www.crow.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
