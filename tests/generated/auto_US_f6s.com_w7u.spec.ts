import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_f6s.com_w7u', ['https://www.f6s.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
