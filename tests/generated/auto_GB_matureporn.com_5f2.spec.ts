import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_matureporn.com_5f2', ['https://matureporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
