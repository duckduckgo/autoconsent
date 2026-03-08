import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bonnelife.com_4r7', ['https://bonnelife.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
