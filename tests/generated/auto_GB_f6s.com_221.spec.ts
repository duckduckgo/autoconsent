import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_f6s.com_221', ['https://www.f6s.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
