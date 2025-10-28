import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bigshopper.nl_2qs', ['https://bigshopper.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
