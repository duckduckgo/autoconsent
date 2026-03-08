import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_colorffy.com_3we', ['https://colorffy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
