import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_kent.ac.uk_0', ['https://www.kent.ac.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
