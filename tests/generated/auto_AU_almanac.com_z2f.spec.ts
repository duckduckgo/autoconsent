import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_almanac.com_z2f', ['https://www.almanac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
