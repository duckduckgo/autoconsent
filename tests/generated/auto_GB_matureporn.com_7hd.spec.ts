import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_matureporn.com_7hd', ['https://matureporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
