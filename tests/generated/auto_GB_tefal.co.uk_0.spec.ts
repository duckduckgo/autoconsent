import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tefal.co.uk_0', ['https://www.tefal.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
