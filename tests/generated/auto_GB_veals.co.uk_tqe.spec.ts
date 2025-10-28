import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_veals.co.uk_tqe', ['https://www.veals.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
