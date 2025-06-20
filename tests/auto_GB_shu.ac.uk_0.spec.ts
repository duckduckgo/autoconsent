import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_shu.ac.uk_0', ['https://www.shu.ac.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
