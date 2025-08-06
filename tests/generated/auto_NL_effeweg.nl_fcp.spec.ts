import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_effeweg.nl_fcp', ['https://www.effeweg.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
