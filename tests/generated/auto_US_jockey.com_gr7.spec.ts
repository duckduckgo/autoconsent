import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jockey.com_gr7', ['https://www.jockey.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
