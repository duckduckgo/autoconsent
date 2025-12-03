import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_philhaarlem.nl_w3r', ['https://philhaarlem.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
