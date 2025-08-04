import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cryptonews.com_8ir', ['https://cryptonews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
