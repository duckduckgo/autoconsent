import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dofe.org_nxz', ['https://www.dofe.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
