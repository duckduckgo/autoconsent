import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_atag.nl_qj4', ['https://www.atag.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
