import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.pepper.com_6u1', ['https://nl.pepper.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
