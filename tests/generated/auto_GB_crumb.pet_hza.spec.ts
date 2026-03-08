import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crumb.pet_hza', ['https://crumb.pet/en-us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
