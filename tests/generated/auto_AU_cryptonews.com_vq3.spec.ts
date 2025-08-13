import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cryptonews.com_vq3', ['https://cryptonews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
