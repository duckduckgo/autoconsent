import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_asus.com_ony', ['https://www.asus.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
