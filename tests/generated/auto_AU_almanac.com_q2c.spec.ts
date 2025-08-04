import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_almanac.com_q2c', ['https://www.almanac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
