import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ukmeds.co.uk_0', ['https://www.ukmeds.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
