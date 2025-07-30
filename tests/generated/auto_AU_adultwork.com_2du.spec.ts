import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_adultwork.com_2du', ['https://adultwork.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
