import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_naturitas.nl_43m', ['https://www.naturitas.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
