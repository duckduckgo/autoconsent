import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brabant.nl_dm1', ['https://www.brabant.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
