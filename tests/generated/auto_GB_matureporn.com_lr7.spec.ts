import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_matureporn.com_lr7', ['https://matureporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
