import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lsusports.net_4va', ['https://lsusports.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
