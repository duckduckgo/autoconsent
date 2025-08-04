import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_asus.com_olc', ['https://www.asus.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
