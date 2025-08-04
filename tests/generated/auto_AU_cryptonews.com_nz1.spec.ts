import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cryptonews.com_nz1', ['https://cryptonews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
