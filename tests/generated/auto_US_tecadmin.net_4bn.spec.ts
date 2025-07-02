import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tecadmin.net_4bn', ['https://tecadmin.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
