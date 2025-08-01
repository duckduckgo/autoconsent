import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brabant.nl_qtc', ['https://www.brabant.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
