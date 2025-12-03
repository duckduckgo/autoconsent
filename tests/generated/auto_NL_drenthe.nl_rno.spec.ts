import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_drenthe.nl_rno', ['https://www.drenthe.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
