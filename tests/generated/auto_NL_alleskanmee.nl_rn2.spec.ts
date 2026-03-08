import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alleskanmee.nl_rn2', ['https://alleskanmee.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
