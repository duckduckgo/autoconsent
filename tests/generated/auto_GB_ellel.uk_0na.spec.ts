import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ellel.uk_0na', ['https://ellel.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
