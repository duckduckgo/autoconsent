import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diabetes.nl_x0r', ['https://www.diabetes.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
