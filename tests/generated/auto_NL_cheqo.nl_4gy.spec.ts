import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cheqo.nl_4gy', ['https://cheqo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
