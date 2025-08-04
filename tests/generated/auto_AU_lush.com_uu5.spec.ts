import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lush.com_uu5', ['https://www.lush.com/uk/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
