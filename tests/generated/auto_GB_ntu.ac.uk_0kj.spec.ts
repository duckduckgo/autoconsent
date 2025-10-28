import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ntu.ac.uk_0kj', ['https://www.ntu.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
