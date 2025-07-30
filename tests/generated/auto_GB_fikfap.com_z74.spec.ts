import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fikfap.com_z74', ['https://fikfap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
