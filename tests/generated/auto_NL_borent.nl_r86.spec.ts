import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_borent.nl_r86', ['https://borent.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
