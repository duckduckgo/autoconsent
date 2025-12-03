import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_f6s.com_yjw', ['https://www.f6s.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
