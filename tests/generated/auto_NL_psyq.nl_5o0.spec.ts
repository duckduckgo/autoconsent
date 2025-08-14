import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_psyq.nl_5o0', ['https://www.psyq.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
