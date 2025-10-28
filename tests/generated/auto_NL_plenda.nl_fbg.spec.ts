import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_plenda.nl_fbg', ['https://plenda.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
