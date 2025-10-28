import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pantropica.nl_58j', ['https://pantropica.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
