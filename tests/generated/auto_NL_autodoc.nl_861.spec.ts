import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_autodoc.nl_861', ['https://www.autodoc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
