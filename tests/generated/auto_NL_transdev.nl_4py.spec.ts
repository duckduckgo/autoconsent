import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_transdev.nl_4py', ['https://www.transdev.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
