import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cryptonews.com_rcj', ['https://cryptonews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
