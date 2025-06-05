import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_slaters.co.uk_0', ['https://www.slaters.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
