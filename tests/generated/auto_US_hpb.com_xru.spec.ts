import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_hpb.com_xru', ['https://www.hpb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
