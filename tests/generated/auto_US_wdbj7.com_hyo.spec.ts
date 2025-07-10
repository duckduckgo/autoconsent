import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wdbj7.com_hyo', ['https://www.wdbj7.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
