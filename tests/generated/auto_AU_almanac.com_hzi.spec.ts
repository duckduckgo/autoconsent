import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_almanac.com_hzi', ['https://www.almanac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
