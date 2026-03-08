import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bpfl.nl_kkj', ['https://bpfl.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
