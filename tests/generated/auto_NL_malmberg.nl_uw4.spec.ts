import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_malmberg.nl_uw4', ['https://malmberg.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
