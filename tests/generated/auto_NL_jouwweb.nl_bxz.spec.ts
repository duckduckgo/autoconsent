import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jouwweb.nl_bxz', ['https://www.jouwweb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
