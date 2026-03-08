import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_login.captin.nl_vc2', ['https://captin.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
