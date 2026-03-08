import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cipr.co.uk_09k', ['https://cipr.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
