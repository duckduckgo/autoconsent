import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jockey.com_ite', ['https://www.jockey.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
