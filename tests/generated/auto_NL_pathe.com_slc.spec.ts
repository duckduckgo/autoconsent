import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pathe.com_slc', ['https://www.pathe.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
