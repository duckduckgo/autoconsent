import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fender.com_wla', ['https://au.fender.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
