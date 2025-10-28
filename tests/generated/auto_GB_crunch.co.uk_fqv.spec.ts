import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crunch.co.uk_fqv', ['https://www.crunch.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
