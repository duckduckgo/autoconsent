import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_surrey.ac.uk_sm9', ['https://www.surrey.ac.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
