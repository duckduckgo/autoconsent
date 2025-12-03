import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isala.nl_oax', ['https://www.isala.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
