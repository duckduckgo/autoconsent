import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wordpress.com_w1g', ['https://wordpress.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
