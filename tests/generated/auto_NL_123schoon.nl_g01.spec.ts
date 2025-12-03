import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123schoon.nl_g01', ['https://www.123schoon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
