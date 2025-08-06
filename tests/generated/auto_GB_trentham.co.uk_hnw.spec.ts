import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trentham.co.uk_hnw', ['https://trentham.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
