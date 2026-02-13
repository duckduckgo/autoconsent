import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_binge.nl_dn5', ['https://www.binge.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
