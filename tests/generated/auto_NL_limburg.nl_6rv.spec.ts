import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_limburg.nl_6rv', ['https://www.limburg.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
