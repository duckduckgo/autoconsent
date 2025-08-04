import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lush.com_jam', ['https://www.lush.com/uk/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
