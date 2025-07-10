import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_almanac.com_uft', ['https://www.almanac.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
