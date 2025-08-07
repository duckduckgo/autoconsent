import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_almanac.com_vhf', ['https://www.almanac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
