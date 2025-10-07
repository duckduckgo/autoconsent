import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hot.com_liy', ['https://hot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
