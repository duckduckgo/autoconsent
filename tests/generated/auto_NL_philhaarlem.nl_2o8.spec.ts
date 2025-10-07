import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_philhaarlem.nl_2o8', ['https://philhaarlem.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
