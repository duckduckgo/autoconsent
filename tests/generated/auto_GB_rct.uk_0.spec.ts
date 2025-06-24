import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rct.uk_0', ['https://www.rct.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
