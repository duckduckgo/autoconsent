import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brabant.nl_6ds', ['https://www.brabant.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
