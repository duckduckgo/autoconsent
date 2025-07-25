import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_l1nieuws.nl_r1a', ['https://www.l1nieuws.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
