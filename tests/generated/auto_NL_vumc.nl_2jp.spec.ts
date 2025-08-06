import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vumc.nl_2jp', ['https://www.vumc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
