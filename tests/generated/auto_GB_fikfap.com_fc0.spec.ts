import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fikfap.com_fc0', ['https://fikfap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
