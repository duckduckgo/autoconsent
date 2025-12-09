import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tinyurl.com_hgg', ['https://tinyurl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
