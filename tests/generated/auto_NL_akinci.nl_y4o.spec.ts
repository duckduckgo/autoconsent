import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_akinci.nl_y4o', ['https://akinci.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
