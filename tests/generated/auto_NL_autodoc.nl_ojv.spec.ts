import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_autodoc.nl_ojv', ['https://www.autodoc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
