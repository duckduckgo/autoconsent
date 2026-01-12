import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_knowunity.nl_qlc', ['https://knowunity.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
