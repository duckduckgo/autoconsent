import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bgs.ac.uk_3zq', ['https://www.bgs.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
