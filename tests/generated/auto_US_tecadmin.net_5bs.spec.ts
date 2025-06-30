import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tecadmin.net_5bs', ['https://tecadmin.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
