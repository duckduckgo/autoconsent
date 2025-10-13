import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_oost.nl_gm5', ['https://www.oost.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
