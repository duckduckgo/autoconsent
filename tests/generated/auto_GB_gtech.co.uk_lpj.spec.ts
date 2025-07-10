import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gtech.co.uk_lpj', ['https://www.gtech.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
