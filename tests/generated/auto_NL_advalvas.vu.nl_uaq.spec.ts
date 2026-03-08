import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_advalvas.vu.nl_uaq', ['https://advalvas.vu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
