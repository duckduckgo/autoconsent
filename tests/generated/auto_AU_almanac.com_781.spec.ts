import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_almanac.com_781', ['https://www.almanac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
