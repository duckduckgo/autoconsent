import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tommy.com_v6o', ['https://nl.tommy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
