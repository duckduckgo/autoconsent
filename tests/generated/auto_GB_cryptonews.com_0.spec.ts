import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cryptonews.com_0', ['https://cryptonews.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
