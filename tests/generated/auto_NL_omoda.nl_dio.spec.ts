import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omoda.nl_dio', ['https://www.omoda.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
