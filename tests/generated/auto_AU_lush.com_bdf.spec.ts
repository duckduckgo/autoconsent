import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lush.com_bdf', ['https://www.lush.com/uk/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
