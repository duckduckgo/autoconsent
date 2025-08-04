import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_f6s.com_ir4', ['https://www.f6s.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
