import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thenudge.com_c7o', ['https://thenudge.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
