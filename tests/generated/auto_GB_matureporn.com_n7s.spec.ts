import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_matureporn.com_n7s', ['https://matureporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
