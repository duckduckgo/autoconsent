import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_surrey.ac.uk_rnf', ['https://www.surrey.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
