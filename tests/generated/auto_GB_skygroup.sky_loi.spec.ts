import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_skygroup.sky_loi', ['https://www.skygroup.sky/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
