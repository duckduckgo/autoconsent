import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_skygroup.sky_d9j', ['https://www.skygroup.sky/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
