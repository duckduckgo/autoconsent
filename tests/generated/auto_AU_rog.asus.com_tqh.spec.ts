import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rog.asus.com_tqh', ['https://rog.asus.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
