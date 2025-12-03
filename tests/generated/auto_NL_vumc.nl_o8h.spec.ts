import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vumc.nl_o8h', ['https://www.vumc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
