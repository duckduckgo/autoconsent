import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_getchip.uk_0', ['https://www.getchip.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
