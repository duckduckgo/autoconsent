import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ncl.ac.uk_0', ['https://www.ncl.ac.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
