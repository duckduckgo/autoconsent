import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deltares.nl_he5', ['https://www.deltares.nl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
