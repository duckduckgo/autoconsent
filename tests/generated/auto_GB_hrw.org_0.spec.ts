import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hrw.org_0', ['https://www.hrw.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
