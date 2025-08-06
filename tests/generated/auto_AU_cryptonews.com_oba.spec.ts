import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cryptonews.com_oba', ['https://cryptonews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
