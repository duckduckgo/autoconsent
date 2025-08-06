import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lakenhal.nl_uxw', ['https://www.lakenhal.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
