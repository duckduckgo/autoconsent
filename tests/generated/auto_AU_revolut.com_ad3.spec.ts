import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_revolut.com_ad3', ['https://www.revolut.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
