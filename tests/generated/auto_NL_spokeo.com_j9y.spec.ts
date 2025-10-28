import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spokeo.com_j9y', ['https://www.spokeo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
