import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lush.com_2z0', ['https://www.lush.com/uk/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
