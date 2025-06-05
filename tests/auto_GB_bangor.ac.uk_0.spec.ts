import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_bangor.ac.uk_0', ['https://www.bangor.ac.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
