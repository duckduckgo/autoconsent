import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_rcp.ac.uk_ck7', ['https://www.rcp.ac.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
