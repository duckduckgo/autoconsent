import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_3djake.uk_0', ['https://www.3djake.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
