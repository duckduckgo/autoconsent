import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cda.nl_y2o', ['https://www.cda.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
