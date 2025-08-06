import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_l1nieuws.nl_jfs', ['https://www.l1nieuws.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
