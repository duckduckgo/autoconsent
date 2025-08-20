import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sasgroup.net_blr', ['https://www.sasgroup.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
