import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_orpheus.nl_cxu', ['https://www.orpheus.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
