import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_galaxus.nl_3rf', ['https://www.galaxus.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
