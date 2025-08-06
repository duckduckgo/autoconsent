import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_momondo.nl_zlm', ['https://www.momondo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
