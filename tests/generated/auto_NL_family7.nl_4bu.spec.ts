import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_family7.nl_4bu', ['https://www.family7.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
