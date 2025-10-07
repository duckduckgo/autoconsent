import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dinoloket.nl_xv5', ['https://www.dinoloket.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
