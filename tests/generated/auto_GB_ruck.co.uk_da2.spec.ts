import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ruck.co.uk_da2', ['https://www.ruck.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
