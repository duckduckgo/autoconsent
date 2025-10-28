import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eyescan.nl_cxj', ['https://www.eyescan.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
