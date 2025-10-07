import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deltares.nl_glk', ['https://www.deltares.nl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
