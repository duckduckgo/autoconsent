import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_superuser.com_n4x', ['https://superuser.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
