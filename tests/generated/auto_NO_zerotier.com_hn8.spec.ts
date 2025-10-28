import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zerotier.com_hn8', ['https://www.zerotier.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
