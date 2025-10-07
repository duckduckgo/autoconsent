import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deltares.nl_ytp', ['https://www.deltares.nl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
