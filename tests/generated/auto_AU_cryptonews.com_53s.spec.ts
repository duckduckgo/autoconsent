import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cryptonews.com_53s', ['https://cryptonews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
