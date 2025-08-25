import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_somfy.nl_aln', ['https://www.somfy.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
