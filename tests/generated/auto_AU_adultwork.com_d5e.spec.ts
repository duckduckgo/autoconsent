import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_adultwork.com_d5e', ['https://adultwork.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
